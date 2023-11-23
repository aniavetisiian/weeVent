import React from "react";

import "./Home.css";
import Flip from "../Authentication/Flip/Flip";
import SolvingProject from "./SolvingProject/SolvingProject";
import SineWaveAnimation from "./SolvingProject/AnimationWave/AnimationWave";
const Home = (props) => {
  console.log(props);

  return (
    <div className="Home">
      <div className="Auth">
        <div className="imgBox">
          <div className="menu">
            <div className="menu-bar">
              <ul className="menu-items">
                {/* <li>Home</li>
                <li>About</li> */}
                <li>
                  <div className="logo"></div>
                </li>
                {/* <li>Contact</li>
                <li>Profile</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flip12">
        <div className="flip">
          <Flip
            frontText={"Սեղմիր այստեղ մուտք գործելու համար"}
            innerText={"Մուտք գործել"}
            content={"signin"}
          />
        </div>
        <div className="flip2">
          <Flip
            frontText={"Սեղմիր այստեղ գրանցվելու համար"}
            innerText={"Գրանցվել"}
            content={"signup"}
          />
        </div>
      </div>

      <div className="componentAbout">
        <SineWaveAnimation />

        <div className="images">
          <div className="row1">
            <div className="imgBox1"></div>
            <div className="imgBox2"></div>
          </div>
          <div className="row2">
            <div className="imgBox3"></div>
            <div className="imgBox4"></div>
          </div>
        </div>
        <SolvingProject />
      </div>
    </div>
  );
};

export default Home;
