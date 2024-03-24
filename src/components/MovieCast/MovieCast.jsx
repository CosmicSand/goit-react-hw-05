import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { creditsRequest } from "../../requests";
import ActorCard from "../ActorCard/ActorCard";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const location = useLocation();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const movieID = location.state.id;
  useEffect(() => {
    async function castRequest() {
      try {
        setIsLoading(true);
        const response = await creditsRequest(movieID);

        setActors(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    castRequest();
  }, [movieID]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
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
