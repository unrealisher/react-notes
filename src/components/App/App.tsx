import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Colors from "./../Colors/Colors";
import Notes from "./../Notes/Notes";

import styles from "./App.module.scss";
import { fetchData } from "../../store/actions/fetchData";
import INote from "../../interfaces/INote";
import NoteConstructor from "../NoteConstructor/NoteConstructor";
import { ThunkDispatch } from "redux-thunk";
import IState from "../../interfaces/IState";
import { AnyAction } from "redux";

interface IDispatchToProps {
  onFetchData: Function;
}

interface IProps extends IDispatchToProps {}

export const App = (props: IProps): JSX.Element => {
  const { onFetchData } = props;
  const [popup, setPopup] = useState<boolean>(false);
  const [patchItem, setPatchItem] = useState<INote>({});

  useEffect(() => {
    onFetchData();
  });

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Header setPopup={setPopup} />
      </header>
      <main className={styles.main}>
        <Colors />
        <Notes setPatchItem={setPatchItem} setPopup={setPopup} />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
      {popup && (
        <NoteConstructor
          setPopup={setPopup}
          setPatchItem={setPatchItem}
          note={patchItem}
        />
      )}
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, null, AnyAction>
): IDispatchToProps => {
  return {
    onFetchData: (): void => {
      dispatch(fetchData());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
