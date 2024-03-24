import { useEffect, useState } from "react";
import { filmListRequest } from "../requests";
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";

export default function HomePage() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function moviesRequest() {
      try {
        setIsLoading(true);
        const response = await filmListRequest();
        setMoviesArray(response);
        return response;
      } catch (error) {
        console.log(error);
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
      {!isLoading && <MoviesList moviesArray={moviesArray} />}
    </main>
  );
}
