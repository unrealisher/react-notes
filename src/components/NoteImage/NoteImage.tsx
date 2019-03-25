import React from "react";

import INote from "./../../intefaces/INote";

import NoteFooter from "./../NoteFooter/NoteFooter";

import styles from "./NoteImage.module.scss";

interface IProps {
  note: INote;
  tags: string[] | undefined;
}

const NoteImage = (props: IProps): JSX.Element => {
  const { note, tags } = props;
  return (
    <React.Fragment>
      <img src={note.url} className={styles.image} alt="Картинка" />
      <div className={styles.wrapper}>
        <NoteFooter tags={tags} created={note.created} />
      </div>
    </React.Fragment>
  );
};
export default NoteImage;
