import React from "react";
import styles from "./Header.module.css";
import ToggleSwitch from "./ToggleSwitch";

function Header(props) {
  return (
    <header>
      <h1 className={props.darkMode ? `${styles.dark}` : `${styles.light}`}>
        Social Media Dashboard
      </h1>
      <div>
        <p>Total Followers: 23,004</p>
        <ToggleSwitch onClick={props.darkModeHandler} />
      </div>
    </header>
  );
}

export default Header;
