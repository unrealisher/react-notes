import React from "react";

import styles from "./Logo.module.scss";

export const Logo = (): JSX.Element => {
  return (
    <a className={styles.logo} href="https://yandex.ru">
      Яндекс Заметки
    </a>
  );
};

export default Logo;
