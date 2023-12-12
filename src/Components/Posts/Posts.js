import React from "react";
import Card from "./Card/Card";
import "./Posts.css";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const posts = props.postsData.map((c) => {
    return (
      <Card
        key={c._id}
        avatar={c.userId.avatar}
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
      <Link to="/myProfile">
        <div className="goBack"></div>
      </Link>
      <div className="header">
        <h1 className="mainText">Բոլոր նորություններն ու միջոցառումները</h1>
      </div>

      <div className="cards">{posts}</div>
    </div>
  );
};

export default Posts;
