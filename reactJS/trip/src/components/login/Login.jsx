import React, { useState, useRef } from "react";
import styles from "./Login.module.css";
const Login = ({ changeLoginState }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  // 이메일
  const onChangeEmail = () => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = emailRef.current.value;
    if (!emailRegex.test(emailCurrent)) {
      alert("이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ");
    } else {
      setEmailCheck(true);
    }
  };
  // 비밀번호
  const onChangePassword = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = passwordRef.current.value;

    if (!passwordRegex.test(passwordCurrent)) {
      alert("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
    } else {
      setPasswordCheck(true);
    }
  };

  const ClickLogin = (e) => {
    e.preventDefault();
    onChangeEmail();
    onChangePassword();
    if (emailCheck && passwordCheck) {
      const TOKEN = {
        email: emailRef.current.value || "",
        password: passwordRef.current.value || "",
      };

      localStorage.setItem("token", JSON.stringify(TOKEN));
      changeLoginState(true);
    }
  };

  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <p> Login</p>
        <input
          ref={emailRef}
          type="text"
          className={styles.id}
          placeholder="Email을 입력해주세요"
        />
        <input
          ref={passwordRef}
          type="password"
          className={styles.password}
          placeholder="password를 입력해주세요"
        />

        <button className={styles.button} onClick={(e) => ClickLogin(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
