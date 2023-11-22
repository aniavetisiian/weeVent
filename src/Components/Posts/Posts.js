import React from "react";
import Card from "./Card/Card";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = (props) => {
  const posts = props.postsData.map((c) => {
    return (
      <Card
        key={c._id}
        avatar={c.avatar}
        img={c.img}
        title={c.title}
        description={c.desc}
        date={c.data}
        name={c.userId.username}
      />
    );
  });

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/b9/b1/54/b9b1546b29d3d48f6d19f0ae119c0cc9.gif"
            style={{ width: "100px", height: "95px" }}
            alt=""
          />
        </Link>
        <Link to="/myProfile">
          <img
            src="https://image.flaticon.com/icons/svg/860/860784.svg"
            style={{
              width: "50px",
              height: "50px",
              marginLeft: 15,
              marginBottom: 20,
            }}
            alt=""
          />
        </Link>
        <h1 className="mainText">ALL POSTS</h1>
      </div>

      <div className="cards">{posts}</div>
    </div>
  );
};

export default Posts;
