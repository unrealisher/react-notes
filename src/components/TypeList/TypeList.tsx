import React from "react";
import cn from "classnames";

import styles from "./TypeList.module.scss";

interface IItem {
  text: string;
  value: string;
}

interface IProps {
  wrapper?: string;
  type: string;
  name: string;
  onTypeChange: Function;
  items: IItem[];
}

const TypeList = (props: IProps): JSX.Element => {
  const { wrapper, type, onTypeChange, items, name } = props;
  const getItems = (): JSX.Element[] => {
    return items.map(item => {
      return (
        <li key={item.value} className={styles.item}>
          <input
            id={item.value + name}
            className={styles.radio}
            type="radio"
            name={name}
            value={item.value}
            onChange={() => onTypeChange(item.value)}
            checked={type === item.value}
            hidden
          />
          <label className={styles.label} htmlFor={item.value + name}>
            {item.text}
          </label>
        </li>
      );
    });
  };
  return (
    <ul className={cn(styles.list, wrapper ? wrapper : undefined)}>
      {getItems()}
    </ul>
  );
};

export default TypeList;
