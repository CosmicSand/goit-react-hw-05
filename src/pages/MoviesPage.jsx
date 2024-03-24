import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchRequest } from "../requests";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Filter from "../components/Filter/Filter";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState(null);
  const [params, setParams] = useSearchParams();

  function titleSetting(movieTitle) {
    params.append("query", `${movieTitle}`);
    params.set("query", `${movieTitle}`);
    setParams(params);
  }

  useEffect(() => {
    async function handleSubmit() {
      try {
        const title = params.get("query");
        setIsLoading(true);
        const response = await searchRequest(title);

        if (response.length === 0) {
          throw new Error("Nothing found!");
        }
        setMovies(response);
      } catch (error) {
        setErrorObj(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (!params.get("query")) return;
    handleSubmit();
  }, [params]);

  return (
    <main>
      <Filter submit={titleSetting} />
      {isLoading && <Loader />}
      {errorObj && <ErrorMessage error={errorObj} />}
      {!isLoading && !errorObj && <MovieList moviesArray={movies} />}
    </main>
  );
}
