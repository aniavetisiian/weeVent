import React from "react";

import "./Home.css";
import Flip from "../Authentication/Flip/Flip";
import About from "./About/About";
import Flip2 from "../Authentication/Flip/Flip2";
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
                <li>Home</li>
                <li>About</li>
                <li>
                  <div className="logo"></div>
                </li>
                <li>Contact</li>
                <li>Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flip12">
        <div className="flip">
          <Flip />
        </div>
        <div className="flip2">
          <Flip2 />
        </div>
      </div>
      <div className="componentAbout">
        <div className="about">
          <h1 style={{ fontSize: 35, color: "white" }}>ABOUT US</h1>
          <br></br>
          <About />
        </div>
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
        <SineWaveAnimation />
        <SolvingProject />
      </div>
    </div>
  );
};

export default Home;
