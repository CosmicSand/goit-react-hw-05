import { useState, useEffect } from "react";
import { searchRequest } from "../requests";
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Filter from "../components/Filter/Filter";

export default function MoviesPage() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState(null);

  function titleSetting(movieTitle) {
    setTitle(movieTitle);
  }

  useEffect(() => {
    async function handleSubmit() {
      try {
        setIsLoading(true);
        const response = await searchRequest(title);
        setMovies(response);
        if (response.lenght === 0) {
          throw new Error("Nothing found!");
        }
      } catch (error) {
        console.log(error);
        setErrorObj(error);
      } finally {
        setIsLoading(false);
      }
    }
    handleSubmit();
  }, [title]);

  return (
    <main>
      <Filter submit={titleSetting} />
      {isLoading && <Loader />}
      {errorObj && <ErrorMessage />}
      {!isLoading && !errorObj && <MoviesList moviesArray={movies} />}
    </main>
  );
}