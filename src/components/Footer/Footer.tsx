import React from "react";

import styles from "./Footer.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <a
        className={styles.url + " " + styles.author}
        href="https://vk.com/id104047139"
      >
        Павел Мезенцев
      </a>
      <a
        className={styles.url}
        href="https://academy.yandex.ru/events/frontend/"
      >
        © Яндекс ШРИ
      </a>
    </div>
  );
};

export default Footer;
