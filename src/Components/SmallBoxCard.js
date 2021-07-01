import SmallBox from "./SmallBox";
import styles from "./SmallBoxCard.module.css";
import React, { Fragment } from "react";

function SmallBoxCard(props) {
  return (
    <Fragment>
      <h2>Overview - Today</h2>
      <div className={styles["bottom-card"]}>
        {props.data.map((box) => {
          return (
            <SmallBox
              key={box.key}
              interactions={box.interactions}
              number={box.number}
              percentage={box.percentage}
              icon={box.icon}
              isNegative={box.isNegative}
              darkMode={props.darkMode}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default SmallBoxCard;
