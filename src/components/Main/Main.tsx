import React from "react";

import Colors from "./../Colors/Colors";
import Notes from "./../Notes/Notes";

import styles from "./Main.module.scss";

const Main = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <Colors />
      <Notes />
    </div>
  );
};

export default Main;
