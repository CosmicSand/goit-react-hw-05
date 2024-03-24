import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ error }) {
  return <p className={css.error}>Sory! {error.message}</p>;
}
