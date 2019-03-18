import React from "react";

import styles from "./App.module.scss";

interface Props {
  text: string;
  num: number;
}

const App = props => {
  const { text, num } = props;
  return <p className={styles.text}>{`${text} ${num}`}</p>;
};

export default App;
