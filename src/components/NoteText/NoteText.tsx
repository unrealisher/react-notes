import React from "react";

import INote from "../../interfaces/INote";

import NoteFooter from "./../NoteFooter/NoteFooter";

import styles from "./NoteText.module.scss";

interface IProps {
  note?: INote;
  color?: string;
  tags?: string[] | undefined;
  setPatchItem: Function;
  setPopup: Function;
}

export const NoteText = (props: IProps): JSX.Element => {
  const { note, color, tags, setPatchItem, setPopup } = props;

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div
          className={styles.wrapper_color}
          style={{ backgroundColor: color + "66" }}
        >
          {note && note.title !== undefined && (
            <h3 className={styles.title}>{note.title}</h3>
          )}
          {note && note.text !== undefined && (
            <p className={styles.text}>{note.text}</p>
          )}
          {note && (
            <NoteFooter
              tags={tags}
              note={note}
              setPatchItem={setPatchItem}
              setPopup={setPopup}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoteText;
