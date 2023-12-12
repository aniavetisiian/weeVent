import React, { useState } from "react";
import "./Card.css";
import Avatar from "@material-ui/core/Avatar";

const Card = (props) => {
  const [rot, setRotate] = useState(false);

  return (
    <div className="flip-card13">
      <br />
      <div
        className={
          rot ? ["flip-card-inner13", "rot13"].join(" ") : "flip-card-inner13"
        }
      >
        <div
          onClick={() => setRotate(!rot)}
          rot={rot.toString()}
          className="flip-card-front13"
        >
          <div className="imgCard3">
            <img className="img3" src={props.img} alt="" />
          </div>
        </div>

        <div className="flip-card-back13" onClick={() => setRotate(!rot)}>
          <div className="Card3">
            <div className="info3">
              <div className="avatar3">
                <Avatar
                  style={{ width: 80, height: 80 }}
                  alt="Remy Sharp"
                  src={props.avatar}
                />
              </div>
              <div className="infoText3">
                <p className="username3">{props.name}</p>
                <div className="title3">
                  <p className="titleText3">{props.title}</p>
                </div>
              </div>
            </div>

            <div className="text3">
              <div className="desc3">
                <p className="descText3">{props.description}</p>
              </div>
              <div className="date3">
                <p className="dateText3">{props.date.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
