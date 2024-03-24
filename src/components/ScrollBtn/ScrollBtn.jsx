import { BiSolidChevronsUp } from "react-icons/bi";
import css from "./ScrollBtn.module.css";

export default function ScrollBtn() {
  function scrolling() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button className={css.top} onClick={scrolling}>
      <BiSolidChevronsUp className={css.icon} size="32" />
    </button>
  );
}
