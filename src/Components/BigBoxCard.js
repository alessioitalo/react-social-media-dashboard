import React from "react";
import styles from "./BigBoxCard.module.css";
import BigBox from "./BigBox";

function BigBoxCard(props) {
  return (
    <div className={styles["top-card"]}>
      {props.data.map((box) => {
        return (
          <BigBox
            key={box.key}
            user={box.user}
            number={box.number}
            followers={box.followers}
            today={box.today}
            icon={box.icon}
            border={box.border}
            gradient={box.gradient}
            isNegative={box.isNegative}
            darkMode={props.darkMode}
          />
        );
      })}
    </div>
  );
}

export default BigBoxCard;
