import React from "react";
import styles from "./PostHead.module.css";
const PostHead = ({ firstText, secondText, mainText }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <span className={styles.first_span}>{firstText}</span>
        <span className={styles.sec_span}>{secondText}</span>
        <h3 className={styles.text}>{mainText}</h3>
      </div>
    </div>
  );
};

export default PostHead;
