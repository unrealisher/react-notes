import React, { useRef } from "react";
import moment from "moment";

import styles from "./ConstructorReminder.module.scss";

interface IProps {
  reminder: number;
  setReminder: Function;
}

export const ConstructorReminder = (props: IProps): JSX.Element => {
  const { reminder, setReminder } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <label>
      <span className={styles.text}>Напоминание:</span>
      <input
        className={styles.input}
        type="date"
        value={
          reminder !== 0 ? moment(reminder).format("YYYY-MM-DD") : undefined
        }
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
