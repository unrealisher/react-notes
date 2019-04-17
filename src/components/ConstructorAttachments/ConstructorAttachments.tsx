import React, { useRef } from "react";
import cn from "classnames";

import TypeList from "../TypeList/TypeList";

import styles from "./ConstructorAttachments.module.scss";
import ListConstructor from "../ListConstructor/ListConstructor";

interface IProps {
  type: string;
  name: string;
  onTypeChange: Function;
  items: string[];
  setAttachItems: Function;
  checked: boolean;
  setChecked: Function;
}

export const ConstructorAttachments = (props: IProps): JSX.Element => {
  const {
    type,
    name,
    onTypeChange,
    items,
    setAttachItems,
    checked,
    setChecked
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const getImages = (): JSX.Element => {
    return (
      <ul className={styles.list}>
        {items.map(item => {
          return (
            <li key={item} className={styles.item}>
              <img
                src={item}
                className={styles.image}
                alt="Что-то пошло не так"
              />
              <button
                className={styles.reset}
                onClick={() => {
                  let arr = items.slice();
                  const index = items.indexOf(item);
                  if (index !== -1) arr.splice(index, 1);
                  setAttachItems(arr);
                }}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.attach}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Дополнения</span>
        <label
          htmlFor="checkbox"
          className={cn(styles.label, checked && styles.label_checked)}
        />
      </div>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={() => setChecked(!checked)}
        id="checkbox"
        hidden
      />
      <div className={styles.main}>
        <TypeList
          wrapper={styles.margin_bottom}
          type={type}
          name={name}
          onTypeChange={onTypeChange}
          items={[
            { text: "Ссылка", value: "link" },
            { text: "Картинка", value: "image" }
          ]}
        />
        {type === "link" && (
          <ListConstructor
            wrapper={styles.margin_bottom}
            items={items}
            setItems={setAttachItems}
          />
        )}
        {type === "image" && (
          <>
            {items.length > 0 && getImages()}
            <label className={styles.label_file}>
              Введите URL картинки:
              <input className={styles.file} type="text" ref={inputRef} />
            </label>
            <button
              className={styles.button}
              onClick={() => {
                let arr = items.slice();
                if (inputRef.current) {
                  arr.push(inputRef.current.value);
                  inputRef.current.value = "";
                }
                setAttachItems(arr);
              }}
            >
              Загрузить картинку
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConstructorAttachments;
