import React from "react";
import styles from "./SmallBox.module.css";
function SmallBox(props) {
  return (
    // <div className={styles["small-box"]}>
    <div
      className={
        props.darkMode
          ? `${styles["small-box"]} ${styles.dark}`
          : `${styles["small-box"]} ${styles.light}`
      }
    >
      <span className={styles.interactions}>{props.interactions}</span>
      <img src={props.icon} alt="social-media-icon" />
      <span className={styles.number}>{props.number}</span>
      <span
        className={`${styles.percentage} ${
          props.isNegative && styles.negative
        }`}
      >
        <img
          className={styles.arrow}
          src={
            props.isNegative ? "./Images/icon-down.svg" : "./Images/icon-up.svg"
          }
          alt="arrow"
        />
        {props.percentage}
      </span>
    </div>
  );
}

export default SmallBox;
