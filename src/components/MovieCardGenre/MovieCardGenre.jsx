import css from "./MovieCardGenre.module.css";

export default function MovieCardGenre({ movieObj }) {
  const genresText = `${
    movieObj.genres &&
    movieObj.genres
      .map((m, i) => {
        return i == 0 ? m.name : m.name.toLowerCase();
      })
      .join(", ")
  }`;

  return <p className={css.genres}>{genresText}</p>;
}
