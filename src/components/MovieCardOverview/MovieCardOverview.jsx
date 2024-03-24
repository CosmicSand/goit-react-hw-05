import css from "./MovieCardOverview.module.css";

export default function MovieCardOverview({ movieObj }) {
  return (
    <>
      <h2>Owerview</h2>
      <p className={css.overview}>{movieObj.overview}</p>
      <p className={css.rateText}>
        Rating: &nbsp;
        <span className={css.rate}>
          {movieObj.vote_average && movieObj.vote_average.toFixed(1)}
        </span>
      </p>
    </>
  );
}
