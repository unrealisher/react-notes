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
import Data from "../../services/Data";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchNotes } from "../../store/actions/fetchNotes";

interface IDispatchToProps {
  onFetchNotes: Function;
}

interface IProps extends IDispatchToProps {
  setPopup: Function;
}

const NoteConstructor = (props: IProps): JSX.Element => {
  const { setPopup, onFetchNotes } = props;
  const [type, setType] = useState<string>("text");
  const [color, setColor] = useState<number>(-1);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");
  const [activeTags, setTags] = useState<number[]>([]);
  const [reminder, setReminder] = useState<number>(0);
  const [attachType, setAttachType] = useState<string>("link");
  const [attachItems, setAttachItems] = useState<string[]>([]);

  useEffect(() => {
    setText("");
    setItems([]);
    setImage("");
  }, [type]);

  useEffect(() => {
    setAttachItems([]);
  }, [attachType]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitClick = (): void => {
    let note: INote = {};
    note.type = type;
    if (title !== "") note.title = title;
    if (color !== -1) note.color = color;
    if (text !== "") note.text = text;
    if (items.length > 0) {
      note.items = items.map(item => {
        return { text: item, checked: false };
      });
    }
    if (image !== "") note.url = image;
    if (activeTags.length > 0) note.tags = activeTags;
    if (reminder !== 0) note.reminder = reminder;
    if (attachItems.length > 0) {
      note.attachments = attachItems.map(item => {
        return {
          type: attachType,
          url: item
        };
      });
    }
    Data.addNote(note)
      .then(result => onFetchNotes(result))
      .catch(error => console.log(error));
  };

  return (
    <div className={styles.background}>
      <div className={styles.popup}>
        <button className={styles.exit} onClick={() => setPopup(false)} />
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
        <ConstructorReminder setReminder={setReminder} />
        <label className={styles.title_wrapper}>
          <span className={styles.title}>Заголовок:</span>
          <input
            type="text"
            className={styles.title_input}
            ref={inputRef}
            onChange={() => {
              if (inputRef.current) {
                setTitle(inputRef.current.value);
              }
            }}
          />
        </label>

        <ConstructorColors wrapper={styles.wrapper} setColor={setColor} />
        {type === "text" && (
          <TextConstructor wrapper={styles.wrapper} setText={setText} />
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

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    onFetchNotes: (notes: INote[]): void => {
      dispatch(fetchNotes(notes));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NoteConstructor);
