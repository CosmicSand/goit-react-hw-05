import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const classChanging = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={classChanging}>
        Home
      </NavLink>
      <NavLink to="/movies" className={classChanging}>
        Movies
      </NavLink>
    </nav>
  );
}
