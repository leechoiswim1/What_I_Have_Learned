import React, { useEffect, useState, useRef } from "react";
import styles from "./App.module.css";
import Login from "./components/login/Login";
import Post from "./components/post/Post";
import Head from "./components/head/Head";
import PostHead from "./components/postHead/PostHead";
import Cover from "./components/cover/Cover";
import WritePost from "./components/WritePost/WritePost";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  function changeLoginState(state) {
    setIsLoggedIn(state);
  }

  useEffect(() => {
    if (token !== undefined && token !== "" && token !== null && token !== {}) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  const [writing, setWriting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentPostId, setCurrentPostId] = useState("");
  const ClickWriteMode = () => {
    setWriting(!writing);
  };

  const ClickEditMode = (id) => {
    setEditing(!editing);
    setCurrentPostId(id);
  };

  const [posts, setPosts] = useState("");
  const [page, setPage] = useState(1);
  const [pagingPost, setPagingPost] = useState("");
  console.log(posts);
  const getpost = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/albums");
      const post = await data.json();
      setPosts(post.reverse());
      setPagingPost(post.slice(0, 5));
    } catch (e) {
      console.log(e);
    }
  };

  const getPagingPost = () => {
    setPagingPost((pagingPost) => [
      ...pagingPost,
      ...posts.slice(page * 5, (page + 1) * 5),
    ]);
    setPage(page + 1);
  };

  useEffect(() => {
    getpost();
  }, []);

  const makePost = (id, content) => {
    const newPost = {
      userId: id,
      id: posts.length + 1,
      title: content,
    };
    setPagingPost([...[newPost], ...pagingPost]);
    setPosts([...[newPost], ...posts]);
  };

  //무한 스크롤
  const observerRef = useRef();
  //ref연결되어있는 node가 보이면 페이지 요청 함수
  const observer = (node) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        getPagingPost();
      }
    });
    node && observerRef.current.observe(node);
  };

  function deletePost(id) {
    const newArray = [...pagingPost].filter((post) => post.id !== id);
    setPagingPost([...newArray]);
  }

  function editPost(id, content) {
    const newArray = [...pagingPost];
    const idx = newArray.findIndex((post) => post.id !== id);
    newArray[idx].content = content;
    setPagingPost([...newArray]);
  }

  return (
    <React.Fragment>
      <Head
        ClickWriteMode={ClickWriteMode}
        isLoggedIn={isLoggedIn}
        changeLoginState={changeLoginState}
      />
      <Cover />
      {!isLoggedIn ? (
        <Login changeLoginState={changeLoginState} />
      ) : (
        <>
          <PostHead
            firstText="JOURNEY"
            secondText="JOURNEY"
            mainText="Your Journey Starts Here"
          />
          <section className={styles.section}>
            {pagingPost.length > 0 &&
              pagingPost.map((post, idx) => {
                return idx > 0 && idx % 4 === 0 ? (
                  <div key={idx} className={styles.wrapper} ref={observer}>
                    <Post
                      post={post}
                      deletePost={deletePost}
                      ClickWriteMode={ClickWriteMode}
                      ClickEditMode={ClickEditMode}
                    />
                  </div>
                ) : (
                  <div key={idx} className={styles.wrapper}>
                    <Post
                      post={post}
                      deletePost={deletePost}
                      ClickWriteMode={ClickWriteMode}
                      ClickEditMode={ClickEditMode}
                    />
                  </div>
                );
              })}
          </section>
          {writing && (
            <WritePost ClickWriteMode={ClickWriteMode} makePost={makePost} />
          )}
          {editing && (
            <WritePost
              ClickEditMode={ClickEditMode}
              makePost={makePost}
              editing={editing}
              PostId={currentPostId}
              pagingPost={pagingPost}
            />
          )}
        </>
      )}
    </React.Fragment>
  );
}

export default App;
