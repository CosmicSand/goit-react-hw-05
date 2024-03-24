import css from "./MovieCardImage.module.css";

export default function MovieCardImage({ movieObj }) {
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
        alt={movieObj.title}
      />
    </div>
  );
}
