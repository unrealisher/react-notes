import React from "react";

import styles from "./BurgerButton.module.scss";

export const BurgerButton = (): JSX.Element => {
  return <span className={styles.burger_button} />;
};

export default BurgerButton;
