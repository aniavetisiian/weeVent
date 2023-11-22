import React, { useState } from "react";
import "./Flip.css";
import SignIN from "./SignIn/SignIn";
// import SignUp from "./SignUp/SignUp";

const Flip = () => {
  const [rot, setRotate] = useState(false);

  return (
    <div className={"flip-card"}>
      <br />
      <div
        className={
          rot ? ["flip-card-inner", "rot"].join(" ") : "flip-card-inner"
        }
      >
        <div
          onClick={() => setRotate(!rot)}
          rot={rot}
          className="flip-card-front"
        >
          <div className="registerText">
            <h1>Click here to sign in</h1>
          </div>
        </div>
        <div className="flip-card-back">
          <div>
            <h1 className="registerText2">Sign in</h1>
          </div>
          <div className="signInBox">
            <SignIN />
          </div>
          <div
            className="icon111"
            onClick={() => setRotate(!rot)}
            rot={rot}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Flip;
