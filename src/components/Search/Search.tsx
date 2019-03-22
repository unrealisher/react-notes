import React from "react";

import styles from "./Search.module.scss";

const Search = (): JSX.Element => {
  return (
    <article className={styles.search}>
      <div className={styles.wrapper}>
        <input className={styles.input} type="text" placeholder="Поиск" />
        <button className={styles.reset} />
      </div>
      <button className={styles.button}>Поиск</button>
    </article>
  );
};

export default Search;
