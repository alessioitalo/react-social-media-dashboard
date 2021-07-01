import React from "react";
import styles from "./ToggleSwitch.module.css";

function ToggleSwitch(props) {
  return (
    <div>
    <label className={styles.darklabel}>
      Dark Mode</label>
      <label className={styles.switch}>
        <input type="checkbox" onClick={props.onClick} />
        <span className={styles.slider}></span>
    </label>
    </div>
  );
}

export default ToggleSwitch;
