import React, { useRef } from "react";
import cn from "classnames";

import styles from "./TextConstructor.module.scss";

interface IProps {
  wrapper?: string;
  setText: Function;
}

const TextConstructor = (props: IProps): JSX.Element => {
  const { wrapper, setText } = props;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className={cn(styles.wrapper, wrapper ? wrapper : undefined)}>
      <label htmlFor="textarea">Текст заметки:</label>
      <textarea
        id="textarea"
        className={styles.textarea}
        ref={textAreaRef}
        onChange={() => {
          if (textAreaRef.current) setText(textAreaRef.current.value);
        }}
      />
    </div>
  );
};

export default TextConstructor;
