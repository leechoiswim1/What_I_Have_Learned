import React, { useState } from "react";
import styles from "./Post.module.css";
const Post = ({ post, deletePost, ClickEditMode }) => {
  const token = localStorage.getItem("token");
  const Id = JSON.parse(token).email.split("@")[0];
  const [editModal, setEditModal] = useState(false);
  console.log(ClickEditMode);
  return (
    <>
      {Id == post.userId && (
        <button
          className={styles.edit_icon}
          onClick={() => setEditModal(!editModal)}
        >
          <i class="fas fa-cog"></i>
        </button>
      )}
      <img src="http://placehold.it/500/d3d3d3"></img>
      <div className={styles.id}>{post.id}</div>
      <div className={styles.inner_wrapper}>
        <div className={styles.user_id}>ID: {post.userId}</div>
        <div className={styles.title}>{post.title}</div>
      </div>
      {editModal && (
        <div className={styles.modal}>
          <button
            className={styles.edit_btn}
            onClick={() => ClickEditMode(post.id)}
          >
            Edit
          </button>
          <button
            className={styles.delete_btn}
            onClick={() => {
              deletePost(post.id);
              setEditModal(!editModal);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Post;
