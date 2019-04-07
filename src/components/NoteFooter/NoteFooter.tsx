import React from "react";

import Tags from "./../Tags/Tags";
import Edit from "./../Edit/Edit";
import Date from "./../Date/Date";

import styles from "./NoteFooter.module.scss";

interface IProps {
  tags?: string[];
  created?: number;
}

const NoteFooter = (props: IProps): JSX.Element => {
  const { tags, created }: IProps = props;
  return (
    <div className={styles.footer}>
      {tags !== undefined ? <Tags tags={tags} /> : null}
      <div className={styles.wrapper}>
        <Edit />
        <Date created={created} />
      </div>
    </div>
  );
};

export default NoteFooter;
