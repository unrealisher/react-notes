import React from "react";

import IAttachment from "../../interfaces/IAttachment";

import styles from "./Attachments.module.scss";

interface IProps {
  attachments?: IAttachment[];
}

const Attachments = (props: IProps): JSX.Element => {
  const { attachments } = props;

  const getItems = (): JSX.Element => {
    if (attachments && attachments[0].type === "link") {
      return (
        <ul className={styles.list_link}>
          {attachments.map(item => {
            return (
              <li key={item.url} className={styles.item_link}>
                <a href={item.url} className={styles.link}>
                  {item.url && item.url.slice(8)}
                </a>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul className={styles.list_image}>
          {attachments &&
            attachments.map(item => {
              return (
                <li key={item.url} className={styles.item_image}>
                  <img
                    src={item.url}
                    className={styles.image}
                    alt="Список изображений"
                  />
                </li>
              );
            })}
        </ul>
      );
    }
  };
  return <div className={styles.attachments}>{getItems()}</div>;
};

export default Attachments;
