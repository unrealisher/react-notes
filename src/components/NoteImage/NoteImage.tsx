import React from "react";

import INote from "../../interfaces/INote";

import NoteFooter from "./../NoteFooter/NoteFooter";

import styles from "./NoteImage.module.scss";

interface IProps {
  note?: INote;
  tags?: string[] | undefined;
}

const NoteImage = (props: IProps): JSX.Element => {
  const { note, tags } = props;
  return (
    <React.Fragment>
      {note && <img src={note.url} className={styles.image} alt="Картинка" />}
      {note && (
        <div className={styles.wrapper}>
          <NoteFooter tags={tags} created={note.created} />
        </div>
      )}
    </React.Fragment>
  );
};
export default NoteImage;
