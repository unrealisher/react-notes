import React from "react";

import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Colors from "./../Colors/Colors";
import Notes from "./../Notes/Notes";

import styles from "./App.module.scss";

const App = (): JSX.Element => {
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

export default App;
