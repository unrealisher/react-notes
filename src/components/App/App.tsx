import React, { useState, useEffect } from "react";

import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Colors from "./../Colors/Colors";
import Notes from "./../Notes/Notes";

import Data from "./../../services/Data";

import IData from "./../../intefaces/IData";

import styles from "./App.module.scss";

const App = (): JSX.Element => {
  const initialObj: IData = { notes: [], colors: [], tags: [] };
  const [data, setData] = useState(initialObj);

  useEffect(() => {
    Data.getData()
      .then(result => {
        console.log("запрос");
        setData(result);
      })
      .catch(error => console.log(error));
  }, []);

  const { notes, colors, tags } = data;

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        {colors !== [] ? <Colors colors={colors} /> : null}
        {data !== initialObj ? <Notes data={{ notes, colors, tags }} /> : null}
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
