import css from "./ActorCard.module.css";

export default function ActorCard({ actor }) {
  return (
    <div className={css.container}>
      <div className={css.imgCont}>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={`${actor.name} photo`}
          width={500}
          aria-label={`${actor.name} photo`}
        />
      </div>
      <div className={css.description}>
        <p>{actor.name}</p>
        <span>as</span>
        <p>{actor.character}</p>
      </div>
    </div>
  );
}
