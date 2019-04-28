import React from "react";

import INote from "../../interfaces/INote";
import IItem from "../../interfaces/IItem";

import NoteFooter from "./../NoteFooter/NoteFooter";

import styles from "./NoteList.module.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setCheckItem } from "../../store/actions/checkItem";

interface IDispatchToProps {
  onCheckboxChange: Function;
}

interface IProps extends IDispatchToProps {
  note?: INote;
  color?: string;
  tags?: string[] | undefined;
  setPatchItem: Function;
  setPopup: Function;
}

export const NoteList = (props: IProps): JSX.Element => {
  const {
    note,
    color,
    tags,
    onCheckboxChange,
    setPatchItem,
    setPopup
  }: IProps = props;

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
                onChange={() => {
                  onCheckboxChange(items.indexOf(item), note);
                }}
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
        style={{ backgroundColor: color + "66" }}
      >
        {note && note.title !== undefined && (
          <h3 className={styles.title}>{note.title}</h3>
        )}
        {note && note.items !== undefined && (
          <ul className={styles.list_unchecked}>
            {getItems(note.items, false)}
          </ul>
        )}
      </div>
      <div className={styles.wrapper_checked}>
        {note && note.items !== undefined && (
          <ul className={styles.list_checked}>{getItems(note.items, true)}</ul>
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
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    onCheckboxChange: (index: number, note: INote) => {
      dispatch(setCheckItem(index, note));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NoteList);
