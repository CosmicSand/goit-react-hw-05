import { NavLink, useParams } from "react-router-dom";
import clsx from "clsx";
import css from "./AdditionInfo.module.css";

export default function AdditionInfo() {
  const { movieId } = useParams();

  const classChanging = ({ isActive }) => {
    return clsx("link", isActive && "active");
  };
  return (
    <ul className={css.list}>
      <li>
        <NavLink to="cast" className={classChanging} state={{ id: movieId }}>
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink to="reviews" className={classChanging} state={{ id: movieId }}>
          Review
        </NavLink>
      </li>
    </ul>
  );
}
