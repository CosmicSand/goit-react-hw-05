import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { creditsRequest } from "../../requests";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ActorCard from "../ActorCard/ActorCard";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function castRequest() {
      try {
        setIsLoading(true);
        const response = await creditsRequest(movieId);
        if (response.length === 0) {
          throw new Error("No actor's list available.");
        }
        setActors(response.filter((actor, i) => i < 8));
      } catch (error) {
        setErrorObj(error);
      } finally {
        setIsLoading(false);
      }
    }

    castRequest();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {errorObj && <ErrorMessage error={errorObj} />}
      {!isLoading && !errorObj && (
        <ul className={css.list}>
          {actors.map((actor) => {
            return (
              <li key={actor.id}>
                <ActorCard actor={actor} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
