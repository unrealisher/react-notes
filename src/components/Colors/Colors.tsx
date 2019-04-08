import React from "react";

import Color from "./../Color/Color";

import IColor from "../../interfaces/IColor";

import styles from "./Colors.module.scss";
import { connect } from "react-redux";
import IState from "../../interfaces/IState";

interface IStateToProps {
  colors: IColor[] | undefined;
}

interface IProps extends IStateToProps {}

const Colors = (props: IProps): JSX.Element | null => {
  const { colors } = props;
  if (!colors && colors === []) return null;
  return (
    <div className={styles.colors}>
      <h2 className={styles.title}>Заметки</h2>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {colors &&
            colors.map(
              (item): JSX.Element => {
                return (
                  <li key={item.color} className={styles.item}>
                    <Color color={item} />
                  </li>
                );
              }
            )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState): IStateToProps => {
  const { colors } = state;
  return { colors };
};

export default connect(mapStateToProps)(Colors);
