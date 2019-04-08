import React, { useRef } from "react";

import styles from "./Search.module.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setSearchItems } from "../../store/actions/searchItems";

interface IDispatchToProps {
  onTextChange: Function;
}

interface IProps extends IDispatchToProps {}

const Search = (props: IProps): JSX.Element => {
  const { onTextChange } = props;
  const refInput = useRef<HTMLInputElement>(null);
  return (
    <article className={styles.search}>
      <div className={styles.wrapper}>
        <input
          ref={refInput}
          className={styles.input}
          type="text"
          placeholder="Поиск"
        />
        <button
          className={styles.reset}
          onClick={() => {
            if (refInput.current) refInput.current.value = "";
            onTextChange("");
          }}
        />
      </div>
      <button
        className={styles.button}
        onClick={() => {
          if (refInput.current) onTextChange(refInput.current.value);
        }}
      >
        Поиск
      </button>
    </article>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    onTextChange: (text: string): void => {
      dispatch(setSearchItems(text));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
