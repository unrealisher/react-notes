import React from "react";

import Logo from "./../Logo/Logo";
import BurgerButton from "./../BurgerButton/BurgerButton";
import Navigation from "./../Navigation/Navigation";

import styles from "./Header.module.scss";

interface IProps {
  setPopup: Function;
}

const Header = (props: IProps): JSX.Element => {
  const { setPopup } = props;
  return (
    <div className={styles.header}>
      <h1 hidden>Яндекс Заметки</h1>
      <div className={styles.wrapper}>
        <Logo />
        <label className={styles.label} htmlFor="menu-checkbox">
          <BurgerButton />
        </label>
      </div>
      <input
        className={styles.checkbox}
        id="menu-checkbox"
        type="checkbox"
        hidden
      />
      <div className={styles.navigation_wrapper}>
        <Navigation setPopup={setPopup} />
      </div>
    </div>
  );
};

export default Header;
