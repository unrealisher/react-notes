import React from "react";

import styles from "./Tags.module.scss";

interface IProps {
  tags: string[];
}

const Tags = (props: IProps): JSX.Element => {
  const { tags } = props;
  return (
    <ul className={styles.list}>
      {tags.map(tag => {
        return (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
