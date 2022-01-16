import React from "react";
import styles from "./Cover.module.css";
const Cover = () => {
  return (
    <div className={styles.cover}>
      <section className={styles.section}>
        <p className={styles.main_text}>
          Let's Enjoy <br />
          The Wonders of Nature
        </p>
        <p className={styles.sec_text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          veritatis in tenetur doloremque, maiores doloribus officia iste.
          Dolores.
        </p>
      </section>
    </div>
  );
};

export default Cover;
