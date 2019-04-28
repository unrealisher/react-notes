import React, { useRef } from "react";
import cn from "classnames";

import styles from "./ImageConstructor.module.scss";

interface IProps {
  wrapper?: string;
  image: string;
  setImage: Function;
}

export const ImageConstructor = (props: IProps): JSX.Element => {
  const { wrapper, image, setImage } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={cn(styles.wrapper, wrapper ? wrapper : undefined)}>
      {image === "" && (
        <>
          <label>
            Введите URL картинки:
            <input className={styles.file} type="text" ref={inputRef} />
          </label>
          <button
            className={styles.button}
            onClick={() => {
              if (inputRef.current) setImage(inputRef.current.value);
            }}
          >
            Загрузить картинку
          </button>
        </>
      )}
      {image !== "" && (
        <>
          <img
            src={image}
            className={styles.image}
            alt="Упс, что-то пошло не так"
          />
          <button className={styles.reset} onClick={() => setImage("")} />
        </>
      )}
    </div>
  );
};

export default ImageConstructor;
