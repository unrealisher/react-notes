import React, { useContext } from "react";

import Color from "./../Color/Color";

import ColorContext from "./../../contexts/ColorContext";

import styles from "./Colors.module.scss";

const Colors = (): JSX.Element => {
  const arrColors: string[] = useContext(ColorContext);
  return (
    <div className={styles.colors}>
      <h2 className={styles.title}>Заметки</h2>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {arrColors.map(
            (color): JSX.Element => {
              return (
                <li key={color} className={styles.item}>
                  <Color color={color} />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default Colors;
