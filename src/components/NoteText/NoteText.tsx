import React from "react";

import INote from "./../../intefaces/INote";

import Tags from "./../Tags/Tags";
import Date from "./../Date/Date";

import styles from "./NoteText.module.scss";

interface IProps {
  note: INote;
  color: string;
  tags: string[] | undefined;
}

const NoteText = (props: IProps): JSX.Element => {
  const { note, color, tags } = props;

  return (
    <React.Fragment>
      <div className={styles.wrapper} style={{ backgroundColor: color }}>
        {note.title !== undefined ? (
          <h3 className={styles.title}>{note.title}</h3>
        ) : null}
        {note.text !== undefined ? (
          <p className={styles.text}>{note.text}</p>
        ) : null}
        <div className={styles.wrapper_down}>
          {tags !== undefined ? <Tags tags={tags} /> : null}
          <Date created={note.created} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoteText;
