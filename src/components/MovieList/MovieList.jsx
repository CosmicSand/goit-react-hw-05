import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

export default function MoviesList({ moviesArray }) {
  const location = useLocation();
  return (
    <ul>
      {moviesArray
        .toSorted((a, b) => b.vote_average - a.vote_average)
        .map((movie) => {
          return (
            <li key={movie.id} className={css.item}>
              <Link
                to={`/movies/${movie.id}`}
                state={location}
                className={css.link}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
