import React from "react";

import INote from "./../../intefaces/INote";
import IItem from "./../../intefaces/IItem";

import Tags from "./../Tags/Tags";
import Date from "./../Date/Date";

import styles from "./NoteList.module.scss";

interface IProps {
  note: INote;
  color: string;
  tags: string[] | undefined;
}

const NoteList = (props: IProps): JSX.Element => {
  const { note, color, tags }: IProps = props;

  const getItems = (items: IItem[], checked: boolean): JSX.Element[] => {
    return items
      .filter(item => {
        return item.checked === checked;
      })
      .map(item => {
        return (
          <li key={item.text} className={styles.item}>
            <label className={styles.label}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={item.checked ? true : false}
              />
              <span className={styles.text}>{item.text}</span>
            </label>
          </li>
        );
      });
  };

  return (
    <React.Fragment>
      <div
        className={styles.wrapper_unchecked}
        style={{ backgroundColor: color }}
      >
        {note.title !== undefined ? (
          <h3 className={styles.title}>{note.title}</h3>
        ) : null}
        {note.items !== undefined ? (
          <ul className={styles.list_unchecked}>
            {getItems(note.items, false)}
          </ul>
        ) : null}
      </div>
      <div className={styles.wrapper_checked}>
        {note.items !== undefined ? (
          <ul className={styles.list_checked}>{getItems(note.items, true)}</ul>
        ) : null}
        {tags !== undefined ? <Tags tags={tags} /> : null}
        <Date created={note.created} />
      </div>
    </React.Fragment>
  );
};

export default NoteList;
