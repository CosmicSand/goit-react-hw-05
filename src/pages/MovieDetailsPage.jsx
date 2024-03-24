import { useParams, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { movieInfoRequest } from "../requests";
import AdditionInfo from "../components/AdditionInfo/AdditionInfo";
import MovieCard from "../components/MovieCard/MovieCard";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState(null);
  const location = useLocation();
  const backPath = useRef(location.state ?? "/");

  useEffect(() => {
    async function movieRequest() {
      try {
        setIsLoading(true);
        const response = await movieInfoRequest(movieId);
        if (response.length === 0) {
          throw new Error("No movie info :(");
        }
        setMovie(response);
      } catch (error) {
        setErrorObj(error);
      } finally {
        setIsLoading(false);
      }
    }

    movieRequest();
  }, [movieId]);

  return (
    <main>
      {isLoading && <Loader />}
      {errorObj && <ErrorMessage error={errorObj} />}
      {!isLoading && (
        <MovieCard movieId={movieId} movie={movie} backPath={backPath} />
      )}
      {!isLoading && <AdditionInfo />}
      {!isLoading && <Outlet />}
    </main>
  );
}
