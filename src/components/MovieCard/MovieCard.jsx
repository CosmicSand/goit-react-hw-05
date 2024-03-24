import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { TbChevronsLeft } from "react-icons/tb";
import MovieCardGenre from "../MovieCardGenre/MovieCardGenre";
import MovieCardOverview from "../MovieCardOverview/MovieCardOverview";
import MovieCardImage from "../MovieCardImage/MovieCardImage";
import css from "./MovieCard.module.css";

export default function MovieCard({ movieId, movie, backPath }) {
  // const location = useLocation();
  // const backPath = useRef(location.state ?? "/");

  return (
    <>
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
    </>
  );
}
