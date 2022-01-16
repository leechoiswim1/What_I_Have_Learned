import React, { useRef, useState } from "react";
import PostHead from "../postHead/PostHead";
import styles from "./WritePost.module.css";

const WritePost = ({
  ClickWriteMode,
  ClickEditMode,
  makePost,
  editing,
  postId,
  pagingPost,
}) => {
  const textRef = useRef();

  const idx = editing ? pagingPost.findIndex((post) => post.id == postId) : "";

  console.log(idx);
  const [contentValue, setcontentValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const Id = JSON.parse(token).email.split("@")[0];
    const content = textRef.current.value || "";
    textRef.current.value = "";
    makePost(Id, content);
    ClickWriteMode();
  };

  return (
    <>
      {editing ? (
        <div className={styles.overlay} onClick={ClickEditMode} />
      ) : (
        <div className={styles.overlay} onClick={ClickWriteMode} />
      )}

      <div className={styles.post_box}>
        <PostHead
          firstText="JOURNEY"
          secondText="JOURNEY"
          mainText="Your Journey Starts Here"
        />
        <form className={styles.form}>
          <textarea
            defaultValue={contentValue}
            ref={textRef}
            type="text"
            className={styles.textarea}
            placeholder="Write your Journey"
          />
          <button type="text" className={styles.button} onClick={onSubmit}>
            Write
          </button>
        </form>
      </div>
    </>
  );
};

export default WritePost;
