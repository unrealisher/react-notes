import React from "react";

import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Colors from "./../Colors/Colors";
import Notes from "./../Notes/Notes";

import data from "./../../data/data";

import IData from "./../../intefaces/IData";

import styles from "./App.module.scss";

const App = (): JSX.Element => {
  const { colors }: IData = data;
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Colors colors={colors} />
        <Notes data={data} />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
