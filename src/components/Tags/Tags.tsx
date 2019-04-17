import React from "react";

import styles from "./Tags.module.scss";

interface IProps {
  tags?: string[];
}

export const Tags = (props: IProps): JSX.Element => {
  const getTag = (tag: string): string => {
    if (tag.length > 33) {
      return tag.substr(0, 30) + "...";
    }
    return tag;
  };

  const { tags } = props;
  return (
    <ul className={styles.list}>
      {tags &&
        tags.map(tag => {
          return (
            <li key={tag} className={styles.tag}>
              {getTag(tag)}
            </li>
          );
        })}
    </ul>
  );
};

export default Tags;
