import React, { useState } from "react";
import "./Card.css";

const MyCard = (props) => {
  const [rot, setRot] = useState(false);

  return (
    <div className="flip-card-Card">
      <div
        onClick={() => setRot(!rot)}
        rot={rot.toString()}
        className={
          rot
            ? ["flip-card-inner-Card", "rot"].join(" ")
            : "flip-card-inner-Card"
        }
      >
        <div className="flip-card-front-Card">
          <img
            src={props.img}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flip-card-back-Card">
          <p
            style={{
              fontSize: 25,
              color: "black",
              textDecoration: "underline",
              marginTop: 10,
            }}
          >
            {props.title}
          </p>
          <p style={{ margin: 10, color: "black" }}>{props.desc}</p>
          <br></br>
          <p style={{ margin: 3, color: "black" }}>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
