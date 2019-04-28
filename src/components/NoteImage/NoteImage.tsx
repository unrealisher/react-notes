import React from "react";

import INote from "../../interfaces/INote";

import NoteFooter from "./../NoteFooter/NoteFooter";

import styles from "./NoteImage.module.scss";

interface IProps {
  note?: INote;
  tags?: string[] | undefined;
  setPatchItem: Function;
  setPopup: Function;
}

export const NoteImage = (props: IProps): JSX.Element => {
  const { note, tags, setPatchItem, setPopup } = props;
  return (
    <React.Fragment>
      {note && <img src={note.url} className={styles.image} alt="Картинка" />}
      {note && (
        <div className={styles.wrapper}>
          <NoteFooter
            note={note}
            tags={tags}
            setPatchItem={setPatchItem}
            setPopup={setPopup}
          />
        </div>
      )}
    </React.Fragment>
  );
};
export default NoteImage;
