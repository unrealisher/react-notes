import React from "react";
import moment from "moment";
import "moment/locale/ru";

import styles from "./Date.module.scss";

interface IProps {
  created?: number;
}

export const Date = (props: IProps): JSX.Element => {
  const { created } = props;
  moment.locale("ru");
  return <span className={styles.date}>{moment(created).fromNow()}</span>;
};

export default Date;
