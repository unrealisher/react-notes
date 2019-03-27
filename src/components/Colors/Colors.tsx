import React from "react";

import Color from "./../Color/Color";

import IColor from "./../../intefaces/IColor";

import styles from "./Colors.module.scss";

interface IProps {
  colors: IColor[];
}

const Colors = (props: IProps): JSX.Element => {
  const { colors } = props;
  return (
    <div className={styles.colors}>
      <h2 className={styles.title}>Заметки</h2>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {colors.map(
            (item): JSX.Element => {
              const color: string = item.color;
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
