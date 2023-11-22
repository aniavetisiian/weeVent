import React from "react";
import Card from "./Card/Card";
import "./Posts.css";

const Posts = (props) => {
  const posts = props.postsData.map((c) => {
    return (
      <Card
        key={c._id}
        avatar={c.avatar}
        img={c.imgUrl}
        title={c.title}
        description={c.description}
        date={c.data}
        name={c.userId.username}
      />
    );
  });

  return (
    <div className="posts">
      <div className="header">
        <h1 className="mainText">ALL NEWS</h1>
      </div>

      <div className="cards">{posts}</div>
    </div>
  );
};

export default Posts;
