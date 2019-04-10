import React, { useRef } from "react";

import styles from "./ConstructorReminder.module.scss";

interface IProps {
  setReminder: Function;
}

const ConstructorReminder = (props: IProps): JSX.Element => {
  const { setReminder } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <label>
      <span className={styles.text}>Напоминание:</span>
      <input
        className={styles.input}
        type="date"
        ref={inputRef}
        onChange={() => {
          if (inputRef.current && inputRef.current.valueAsDate) {
            setReminder(inputRef.current.valueAsDate.getTime());
          } else {
            setReminder(0);
          }
        }}
      />
    </label>
  );
};

export default ConstructorReminder;
