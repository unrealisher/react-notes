import React from "react";
import cn from "classnames";

import styles from "./ConstructorColors.module.scss";
import { connect } from "react-redux";
import IState from "../../interfaces/IState";
import IColor from "../../interfaces/IColor";

interface IStateToProps {
  colors?: IColor[];
}

interface IProps extends IStateToProps {
  color: number;
  setColor: Function;
  wrapper?: string;
}

const ConstructorColors = (props: IProps): JSX.Element => {
  let { colors, color, wrapper, setColor } = props;

  colors = [
    { id: 0, color: "#E84747" },
    { id: 1, color: "#F2994A" },
    { id: 2, color: "#F2C94C" },
    { id: 3, color: "#219653" },
    { id: 4, color: "#56CCF2" },
    { id: 5, color: "#2F80ED" },
    { id: 6, color: "#9B51E0" }
  ];

  const getItems = (): JSX.Element[] | null => {
    if (colors) {
      return colors.map(item => {
        return (
          <li key={item.color} className={styles.item}>
            <input
              type="radio"
              name="colors"
              id={item.color}
              className={styles.radio}
              onChange={() => {}}
              checked={color === item.id}
              hidden
            />
            <label
              className={styles.label}
              style={{ backgroundColor: item.color }}
              htmlFor={item.color}
              onClick={() => {
                if (item.id !== undefined) {
                  if (item.id === color) {
                    setColor(-1);
                  } else {
                    setColor(item.id);
                  }
                }
              }}
            />
          </li>
        );
      });
    }
    return null;
  };

  return (
    <ul className={cn(styles.list, wrapper ? wrapper : null)}>{getItems()}</ul>
  );
};

const mapStateToProps = (state: IState): IStateToProps => {
  return {
    colors: state.colors
  };
};

export default connect(mapStateToProps)(ConstructorColors);
