import React, { useRef } from "react";
import cn from "classnames";

import styles from "./ListConstructor.module.scss";

interface IProps {
  wrapper?: string;
  items: string[];
  setItems: Function;
}

export const ListConstructor = (props: IProps): JSX.Element => {
  const { wrapper, items, setItems } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onAdd = (): void => {
    let arr = items.slice();
    if (inputRef.current && inputRef.current.value !== "") {
      arr.push(inputRef.current.value);
      inputRef.current.value = "";
      setItems(arr);
    }
  };

  const onDelete = (index: number): void => {
    let arr = items.slice();
    arr.splice(index, 1);
    setItems(arr);
  };

  const getItems = (): JSX.Element[] => {
    let i = -1;
    return items.map(item => {
      i++;
      return (
        <li key={i} className={styles.item}>
          <span className={styles.text}>{item}</span>
          <button
            className={styles.delete}
            onClick={() => onDelete(items.indexOf(item))}
          />
        </li>
      );
    });
  };
  return (
    <div className={cn(styles.wrapper, wrapper ? wrapper : undefined)}>
      <label className={styles.label}>
        <span className={styles.label_text}>Текст:</span>
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          onKeyUp={event => {
            if (event.keyCode === 13) onAdd();
          }}
        />
        <button className={styles.addButton} onClick={() => onAdd()} />
      </label>
      {items.length > 0 && <ul className={styles.list}>{getItems()}</ul>}
    </div>
  );
};

export default ListConstructor;
