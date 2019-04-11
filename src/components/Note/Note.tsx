import React from "react";

import INote from "../../interfaces/INote";

import Reminder from "./../Reminder/Reminder";
import NoteList from "./../NoteList/NoteList";
import NoteText from "./../NoteText/NoteText";
import NoteImage from "./../NoteImage/NoteImage";
import Attachments from "./../Attachments/Attachments";

import styles from "./Note.module.scss";

interface IProps {
  note?: INote;
  color?: string;
  tags?: string[] | undefined;
  setPatchItem: Function;
  setPopup: Function;
}

const Note = (props: IProps): JSX.Element => {
  const { note, color, tags, setPatchItem, setPopup }: IProps = props;

  return (
    <div className={styles.note}>
      {note && note.reminder && <Reminder reminder={note.reminder} />}
      {note && note.type === "list" && (
        <NoteList
          note={note}
          color={color}
          tags={tags}
          setPatchItem={setPatchItem}
          setPopup={setPopup}
        />
      )}
      {note && note.type === "text" && (
        <NoteText
          note={note}
          color={color}
          tags={tags}
          setPatchItem={setPatchItem}
          setPopup={setPopup}
        />
      )}
      {note && note.type === "image" && (
        <NoteImage
          note={note}
          tags={tags}
          setPatchItem={setPatchItem}
          setPopup={setPopup}
        />
      )}
      {note && note.attachments && (
        <Attachments attachments={note.attachments} />
      )}
    </div>
  );
};

export default Note;
