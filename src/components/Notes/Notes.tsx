import React from "react";

import Note from "./../Note/Note";

import styles from "./Notes.module.scss";
import { connect } from "react-redux";
import IState from "../../interfaces/IState";
import INote from "../../interfaces/INote";

interface IStateToProps {
  state: IState;
}

interface IProps extends IStateToProps {}

const Notes = (props: IProps): JSX.Element | null => {
  const {
    tags,
    colors,
    notes,
    archive,
    activeNotes,
    filter,
    search
  }: IState = props.state;
  if (
    !tags ||
    !colors ||
    !notes ||
    tags === [] ||
    colors === [] ||
    notes === []
  )
    return null;

  let renderNotes: INote[] | undefined;
  if (activeNotes === true) {
    renderNotes = notes;
  } else {
    renderNotes = archive;
  }
  if (filter.length !== 0 && renderNotes) {
    renderNotes = renderNotes.filter(
      item => item.color !== undefined && filter.indexOf(item.color) !== -1
    );
  }
  if (search !== "" && renderNotes) {
    renderNotes = renderNotes.filter(
      item => item.title && item.title.indexOf(search) !== -1
    );
  }

  const getTags = (tagsIds: number[] | undefined): string[] | undefined => {
    let result: string[] = [];
    if (tagsIds && tags) {
      tagsIds.forEach(id => {
        const tag = tags[id].tag;
        if (tag) {
          result.push(tag);
        }
      });
      return result;
    } else {
      return undefined;
    }
  };

  const getSize = (size: string | undefined): string => {
    switch (size) {
      case "s": {
        return styles.note_small;
      }
      case "m": {
        return styles.note_medium;
      }
      case "l": {
        return styles.note_large;
      }
      default: {
        return "s";
      }
    }
  };

  const getColor = (id: number | undefined): string | undefined => {
    if (id !== undefined && colors) {
      return colors[id].color;
    } else {
      return "#FFFFFF";
    }
  };
  return (
    <section className={styles.notes}>
      <ul className={styles.list}>
        {renderNotes &&
          renderNotes.map(
            (note): JSX.Element => {
              return (
                <li
                  key={note.created}
                  className={styles.note + " " + getSize(note.size)}
                >
                  <Note
                    note={note}
                    color={getColor(note.color)}
                    tags={getTags(note.tags)}
                  />
                </li>
              );
            }
          )}
      </ul>
    </section>
  );
};

const mapStateToProps = (state: IState): IStateToProps => {
  return { state };
};

export default connect(mapStateToProps)(Notes);
