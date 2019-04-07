import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Colors from "./../Colors/Colors";
import Notes from "./../Notes/Notes";

import Data from "./../../services/Data";

import IData from "../../interfaces/IData";

import styles from "./App.module.scss";
import { Dispatch } from "redux";
import { fetchData } from "../../store/actions/fetchData";
import { fetchArchive } from "../../store/actions/fetchArchive";
import INote from "../../interfaces/INote";

interface IDispatchToProps {
  onFetchData: Function;
  onFetchArchive: Function;
}

interface IProps extends IDispatchToProps {}

const App = (props: IProps): JSX.Element => {
  const { onFetchData, onFetchArchive } = props;

  useEffect(() => {
    Data.getData()
      .then(result => {
        onFetchData(result);
        Data.getArchive().then(result => {
          onFetchArchive(result);
        });
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Colors />
        <Notes />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    onFetchData: (state: IData): void => {
      dispatch(fetchData(state));
    },
    onFetchArchive: (archive: INote[]): void => {
      dispatch(fetchArchive(archive));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
