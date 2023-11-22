import React, { useState } from "react";
import "./Flip2.css";
import Registration from "./Registration/Registration";

const Flip2 = () => {
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
            <h1>Click here to registor</h1>
          </div>
        </div>
        <div className="flip-card-back">
          <div>
            <h1 className="registerText2">Registor</h1>
          </div>
          <div className="signInBox">
            <Registration />
          </div>
          <div
            className="icon333"
            onClick={() => setRotate(!rot)}
            rot={rot}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Flip2;
