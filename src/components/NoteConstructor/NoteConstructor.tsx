import React, { useState, useRef, useEffect } from "react";

import TypeList from "./../TypeList/TypeList";

import styles from "./NoteConstructor.module.scss";
import TextConstructor from "../TextConstructor/TextConstructor";
import TagsList from "../TagsList/TagsList";
import ListConstructor from "../ListConstructor/ListConstructor";
import ImageConstructor from "../ImageConstructor/ImageConstructor";
import ConstructorColors from "../ConstructorColors/ConstructorColors";
import INote from "../../interfaces/INote";
import ConstructorReminder from "../ConstructorReminder/ConstructorReminder";
import ConstructorAttachments from "../ConstructorAttachments/ConstructorAttachments";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import IState from "../../interfaces/IState";
import { patchNote } from "../../store/actions/patchNote";
import { ThunkDispatch } from "redux-thunk";
import { addNote } from "../../store/actions/addNote";

interface IDispatchToProps {
  onAddItem: Function;
  onPatchItem: Function;
}

interface IProps extends IDispatchToProps {
  note: INote;
  setPopup: Function;
  setPatchItem: Function;
}

export const NoteConstructor = (props: IProps): JSX.Element => {
  const { setPopup, setPatchItem, note, onAddItem, onPatchItem } = props;
  const [type, setType] = useState<string>("text");
  const [color, setColor] = useState<number>(-1);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");
  const [activeTags, setTags] = useState<number[]>([]);
  const [reminder, setReminder] = useState<number>(0);
  const [attachType, setAttachType] = useState<string>(
    note && note.attachments && note.attachments[0] && note.attachments[0].type
      ? note.attachments[0].type
      : "link"
  );
  const [attachItems, setAttachItems] = useState<string[]>([]);

  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setAttachItems([]);
  }, [attachType]);

  useEffect(() => {
    if (note !== {}) {
      if (note.type) setType(note.type);
      if (note.title) setTitle(note.title);
      if (note.tags && note.tags.length > 0) setTags(note.tags);
      if (note.color !== undefined) setColor(note.color);
      if (note.items && note.items.length > 0) {
        let arr: string[] = [];
        note.items.forEach(item => {
          if (item.text !== undefined) {
            arr.push(item.text);
          }
        });
        setItems(arr);
      }
      if (note.text) setText(note.text);
      if (note.attachments) {
        setChecked(true);
        let arr: string[] = [];
        note.attachments.forEach(item => {
          if (item.url) arr.push(item.url);
        });
        setAttachItems(arr);
      }
      if (note.reminder) setReminder(note.reminder);
      if (note.url) setImage(note.url);
    }
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitClick = (): void => {
    let newNote: INote = {};
    newNote.type = type;
    if (note.id !== undefined) newNote.id = note.id;
    if (title !== "") newNote.title = title;
    if (color !== -1) newNote.color = color;
    if (text !== "" && type === "text") newNote.text = text;
    if (items.length > 0 && type === "list") {
      newNote.items = items.map(item => {
        return { text: item, checked: false };
      });
    }
    if (image !== "" && type === "image") newNote.url = image;
    if (activeTags.length > 0) newNote.tags = activeTags;
    if (reminder !== 0) newNote.reminder = reminder;
    if (attachItems.length > 0) {
      newNote.attachments = attachItems.map(item => {
        return {
          type: attachType,
          url: item
        };
      });
    }
    setPatchItem({});
    if (newNote.id !== undefined) {
      onPatchItem(newNote);
    } else {
      onAddItem(newNote);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.popup}>
        <button
          className={styles.exit}
          onClick={() => {
            setPatchItem({});
            setPopup(false);
          }}
        />
        <TypeList
          wrapper={styles.wrapper}
          type={type}
          name="type"
          onTypeChange={setType}
          items={[
            { text: "Список", value: "list" },
            { text: "Текст", value: "text" },
            { text: "Картинка", value: "image" }
          ]}
        />
        <ConstructorReminder reminder={reminder} setReminder={setReminder} />
        <label className={styles.title_wrapper}>
          <span className={styles.title}>Заголовок:</span>
          <input
            type="text"
            className={styles.title_input}
            ref={inputRef}
            value={title !== "" ? title : ""}
            onChange={() => {
              if (inputRef.current) {
                setTitle(inputRef.current.value);
              }
            }}
          />
        </label>

        <ConstructorColors
          wrapper={styles.wrapper}
          color={color}
          setColor={setColor}
        />
        {type === "text" && (
          <TextConstructor
            wrapper={styles.wrapper}
            text={text}
            setText={setText}
          />
        )}
        {type === "list" && (
          <ListConstructor
            wrapper={styles.wrapper}
            items={items}
            setItems={setItems}
          />
        )}
        {type === "image" && (
          <ImageConstructor
            image={image}
            setImage={setImage}
            wrapper={styles.wrapper}
          />
        )}
        <TagsList activeTags={activeTags} setTags={setTags} />

        <ConstructorAttachments
          type={attachType}
          name="attach"
          onTypeChange={setAttachType}
          items={attachItems}
          setAttachItems={setAttachItems}
          checked={checked}
          setChecked={setChecked}
        />
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            setPopup(false);
            onSubmitClick();
          }}
        >
          Готово!
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, null, AnyAction>
): IDispatchToProps => {
  return {
    onPatchItem: (note: INote) => {
      dispatch(patchNote(note));
    },
    onAddItem: (note: INote) => {
      dispatch(addNote(note));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NoteConstructor);
