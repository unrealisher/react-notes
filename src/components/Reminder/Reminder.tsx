import React from "react";
import moment from "moment";
import "moment/locale/ru";

import styles from "./Reminder.module.scss";

interface IProps {
  reminder: number;
}

const Reminder = (props: IProps): JSX.Element => {
  const { reminder } = props;
  moment.locale("ru");
  return (
    <div className={styles.reminder}>
      <b className={styles.text}>{moment(reminder).fromNow()}</b>
    </div>
  );
};

export default Reminder;
