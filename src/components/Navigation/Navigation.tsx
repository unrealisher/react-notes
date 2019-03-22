import React from "react";

import Search from "./../Search/Search";

import styles from "./Navigation.module.scss";

const Navigation = (): JSX.Element => {
  return (
    <nav className={styles.navigation}>
      <h2 hidden>Главное меню</h2>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <button className={styles.button}>Активные</button>
        </li>
        <li className={styles.item + " " + styles.item_archive}>
          <button className={styles.button}>Архив</button>
        </li>
        <li className={styles.item}>
          <button className={styles.button + " " + styles.button_add}>
            Добавить
          </button>
        </li>
        <li className={styles.item}>
          <Search />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
