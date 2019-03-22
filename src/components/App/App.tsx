import React from "react";

import Header from "./../Header/Header";
import Main from "./../Main/Main";
import Footer from "./../Footer/Footer";

import styles from "./App.module.scss";

const App = (): JSX.Element => {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Main />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
