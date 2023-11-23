import React, { useState } from "react";
import "./Flip.css";
import SignIN from "./SignIn/SignIn";
import Registration from "./Registration/Registration";

const Flip = (props) => {
  const [rot, setRotate] = useState(false);

  return (
    <div className="flip-card">
      <br />
      <div className={rot ? "flip-card-inner rot" : "flip-card-inner"}>
        <div onClick={() => setRotate(!rot)} className="flip-card-front">
          <div className="textBox">
            <h1 className="frontText">{props.frontText}</h1>
          </div>
        </div>
        <div className="flip-card-back">
          <div>
            <h1 className="innerText">{props.innerText}</h1>
          </div>
          <div className="signInBox">
            {props.content === "signin" ? <SignIN /> : <Registration />}
          </div>
          <div className="icon111" onClick={() => setRotate(!rot)}></div>
        </div>
      </div>
    </div>
  );
};

export default Flip;
