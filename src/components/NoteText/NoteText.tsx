import React from "react";

import INote from "./../../intefaces/INote";

import NoteFooter from "./../NoteFooter/NoteFooter";

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
      <div className={styles.wrapper}>
        <div
          className={styles.wrapper_color}
          style={{ backgroundColor: color + "66" }}
        >
          {note.title !== undefined ? (
            <h3 className={styles.title}>{note.title}</h3>
          ) : null}
          {note.text !== undefined ? (
            <p className={styles.text}>{note.text}</p>
          ) : null}
          <NoteFooter tags={tags} created={note.created} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoteText;
