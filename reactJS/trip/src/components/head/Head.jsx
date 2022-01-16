import React from "react";
import styles from "./Head.module.css";
const Head = ({ ClickWriteMode, isLoggedIn, changeLoginState }) => {
  function clickLogout() {
    localStorage.removeItem("token");
    changeLoginState(false);
  }
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.logo}>
          <i className="fas fa-mountain fa-2x"></i>
          <span>Trips</span>
        </section>
        <nav className={styles.navbar}>
          <button className={styles.home}>Home</button>
          <button className={styles.write} onClick={ClickWriteMode}>
            Write
          </button>
          {isLoggedIn ? (
            <button className={styles.logout} onClick={clickLogout}>
              Logout
            </button>
          ) : (
            <button className={styles.logout}>LogIn</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Head;
