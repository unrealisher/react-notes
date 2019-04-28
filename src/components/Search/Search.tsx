import React, { useRef, useState } from "react";

import styles from "./Search.module.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setSearchItems } from "../../store/actions/searchItems";
import IState from "../../interfaces/IState";

interface IStateToProps {
  search: string;
}

interface IDispatchToProps {
  onTextChange: Function;
}

interface IProps extends IStateToProps, IDispatchToProps {}

export const Search = (props: IProps): JSX.Element => {
  const { search, onTextChange } = props;
  const refInput = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(search);
  return (
    <article className={styles.search}>
      <div className={styles.wrapper}>
        <input
          ref={refInput}
          className={styles.input}
          type="text"
          placeholder="Поиск"
          onChange={() => {
            if (refInput.current) setValue(refInput.current.value);
          }}
          onKeyUp={event => {
            if (event.keyCode === 13 && refInput.current)
              onTextChange(refInput.current.value);
          }}
          value={value}
        />
        <button
          className={styles.reset}
          onClick={() => {
            setValue("");
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

const mapStateToProps = (state: IState): IStateToProps => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    onTextChange: (text: string): void => {
      dispatch(setSearchItems(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
