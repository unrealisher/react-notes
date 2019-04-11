import React from "react";

import Tags from "./../Tags/Tags";
import Edit from "./../Edit/Edit";
import Date from "./../Date/Date";

import styles from "./NoteFooter.module.scss";
import { connect } from "react-redux";
import IState from "../../interfaces/IState";
import INote from "../../interfaces/INote";

interface IStateToProps {
  activeNotes: boolean;
}

interface IProps extends IStateToProps {
  note?: INote;
  tags?: string[];
  setPatchItem: Function;
  setPopup: Function;
}

const NoteFooter = (props: IProps): JSX.Element => {
  const { tags, note, activeNotes, setPatchItem, setPopup }: IProps = props;
  return (
    <div className={styles.footer}>
      {tags !== undefined && <Tags tags={tags} />}
      <div className={styles.wrapper}>
        {(activeNotes && note && (
          <Edit note={note} setPatchItem={setPatchItem} setPopup={setPopup} />
        )) || <span />}
        {note && <Date created={note.created} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState): IStateToProps => {
  return { activeNotes: state.activeNotes };
};

export default connect(mapStateToProps)(NoteFooter);
