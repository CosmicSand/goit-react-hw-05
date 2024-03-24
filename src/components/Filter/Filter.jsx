import { useId } from "react";

import css from "./Filter.module.css";

export default function Filter({ submit }) {
  const id = useId();
  function submitRequest(e) {
    e.preventDefault();
    const title = e.target.search.value;
    submit(title);

    e.currentTarget.reset();
  }

  return (
    <main>
      <form className={css.form} onSubmit={submitRequest}>
        <input
          className={css.inp}
          type="text"
          id={id}
          name="search"
          autoComplete="off"
          required
          placeholder="Filter by title"
        />
        <button className={css.btn} type="submit">
          Go!
        </button>
      </form>
    </main>
  );
}
