import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { movieInfoRequest } from "../../requests";
import { TbChevronsLeft } from "react-icons/tb";
import MovieCardGenre from "../MovieCardGenre/MovieCardGenre";
import MovieCardOverview from "../MovieCardOverview/MovieCardOverview";
import MovieCardImage from "../MovieCardImage/MovieCardImage";
import Loader from "../Loader/Loader";
import css from "./MovieCard.module.css";

export default function MovieCard() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backPath = useRef(location.state ?? "/");

  useEffect(() => {
    async function movieRequest() {
      try {
        setIsLoading(true);
        const response = await movieInfoRequest(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    movieRequest();
  }, [movieId]);

  console.log(location.state);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <div className={css.back}>
            <Link to={backPath.current} state={{ from: `/movies/${movieId}` }}>
              <TbChevronsLeft className={css.icon} size="32" />
            </Link>
          </div>
          <div className={css.card}>
            <MovieCardImage movieObj={movie} />
            <div className={css.wrapper}>
              <h1 className={css.title}>
                {`${movie.title} (${
                  movie.release_date && movie.release_date.slice(0, 4)
                })`}
              </h1>
              <MovieCardGenre movieObj={movie} />
              <MovieCardOverview movieObj={movie} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
