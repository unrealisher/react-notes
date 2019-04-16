import React from "react";

import Search from "./../Search/Search";

import styles from "./Navigation.module.scss";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { setActiveNotes } from "../../store/actions/setActiveNotes";
import { setArchiveNotes } from "../../store/actions/setArchiveNotes";
import { fetchArchive } from "../../store/actions/fetchArchive";
import { ThunkDispatch } from "redux-thunk";
import IState from "../../interfaces/IState";

interface IDispatchToProps {
  onActiveClick: Function;
  onArchiveClick: Function;
  onFetchArchive: Function;
}

interface IProps extends IDispatchToProps {
  setPopup: Function;
}

const Navigation = (props: IProps): JSX.Element => {
  const { onActiveClick, onArchiveClick, onFetchArchive, setPopup } = props;
  return (
    <nav className={styles.navigation}>
      <h2 hidden>Главное меню</h2>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <button className={styles.button} onClick={() => onActiveClick()}>
            Активные
          </button>
        </li>
        <li className={styles.item + " " + styles.item_archive}>
          <button
            className={styles.button}
            onClick={() => {
              onFetchArchive();
              onArchiveClick();
            }}
          >
            Архив
          </button>
        </li>
        <li className={styles.item}>
          <button
            className={styles.button + " " + styles.button_add}
            onClick={() => setPopup(true)}
          >
            Добавить
          </button>
        </li>
        <li className={styles.item}>
          <Search />
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, null, AnyAction>
): IDispatchToProps => {
  return {
    onActiveClick: (): void => {
      dispatch(setActiveNotes());
    },
    onArchiveClick: (): void => {
      dispatch(setArchiveNotes());
    },
    onFetchArchive: (): void => {
      dispatch(fetchArchive());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
