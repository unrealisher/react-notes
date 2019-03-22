import React from "react";

import INote from "./../../intefaces/INote";

import Date from "./../Date/Date";
import Tags from "./../Tags/Tags";

import styles from "./NoteImage.module.scss";

interface IProps {
  note: INote;
  color: string;
  tags: string[] | undefined;
}

const NoteImage = (props: IProps): JSX.Element => {
  const { note, color, tags } = props;
  return (
    <React.Fragment>
      <img src={note.url} className={styles.image} alt="Картинка" />
      <div className={styles.wrapper} style={{ backgroundColor: color }}>
        {tags !== undefined ? <Tags tags={tags} /> : null}
        <Date created={note.created} />
      </div>
    </React.Fragment>
  );
};
export default NoteImage;
