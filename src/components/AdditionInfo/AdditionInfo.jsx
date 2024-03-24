import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AdditionInfo.module.css";

export default function AdditionInfo() {
  const classChanging = ({ isActive }) => {
    return clsx("link", isActive && "active");
  };
  return (
    <ul className={css.list}>
      <li>
        <NavLink to="cast" className={classChanging}>
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink to="reviews" className={classChanging}>
          Review
        </NavLink>
      </li>
    </ul>
  );
}
