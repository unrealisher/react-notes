import React from "react";

import NotesCollection from "./../../classes/NotesCollection";

import data from "./../../data/data";

import IData from "./../../intefaces/IData";

import Note from "./../Note/Note";

import styles from "./Notes.module.scss";

const Notes = (): JSX.Element => {
  const { tags, colors, notes }: IData = data;

  const getTags = (tagsIds: number[] | undefined): string[] | undefined => {
    if (tagsIds !== undefined) {
      return tagsIds.map(id => {
        return tags[id].tag;
      });
    } else {
      return undefined;
    }
  };

  const getSize = (size: string): string => {
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
        return "";
      }
    }
  };

  const getColor = (id: number | undefined): string => {
    if (id !== undefined) {
      return colors[id].color;
    } else {
      return "white";
    }
  };

  return (
    <section className={styles.notes}>
      <ul className={styles.list}>
        {notes.map(
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

export default Notes;
