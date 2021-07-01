import React from "react";
import styles from "./BigBox.module.css";

function BigBox(props) {
  const borderColor = props.border;

  return (
    <div
      className={
        props.darkMode
          ? `${styles["big-box"]} ${styles.dark}`
          : `${styles["big-box"]} ${styles.light}`
      }
    >
      <div
        className={styles.border}
        style={{
          backgroundColor: `${borderColor}`,
          backgroundImage: `${props.gradient}`,
        }}
      ></div>
      <div className={styles.user}>
        <img src={props.icon} alt="social media icon" />
        <span>{props.user}</span>
      </div>
      <h1>{props.number}</h1>
      <span className={styles.followers}>{props.followers}</span>
      <div
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
        {props.today}
      </div>
      <p></p>
    </div>
  );
}

export default BigBox;
