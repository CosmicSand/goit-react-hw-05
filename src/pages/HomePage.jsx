import { useEffect, useState } from "react";
import { filmListRequest } from "../requests";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState(null);

  useEffect(() => {
    async function moviesRequest() {
      try {
        setIsLoading(true);
        const response = await filmListRequest();
        if (response.length === 0) {
          throw new Error("Nothing found!");
        }
        setMoviesArray(response);
        return response;
      } catch (error) {
        setErrorObj(error);
      } finally {
        setIsLoading(false);
      }
    }
    moviesRequest();
  }, []);

  return (
    <main>
      <h1 className="home-title">
        The <span className="hot">&#10098;hottest&#10099;</span> movies for
        today
      </h1>
      {isLoading && <Loader />}
      {errorObj && <ErrorMessage />}
      {!isLoading && <MovieList moviesArray={moviesArray} />}
    </main>
  );
}
