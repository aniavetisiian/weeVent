import React from "react";
import "./Home.css";
import Flip from "../Authentication/Flip/Flip";
import About from "./About/About";
import Flip2 from "../Authentication/Flip/Flip2";
import { Link } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  
  return (
    <div className="Home">
      <div className="Auth">
        <div className="imgBox">
          <Link to='/posts'>
          <img src='https://i.gifer.com/Ybin.gif'
          style={{width: '100px', height: '95px'}}
          alt=''
          />
          </Link>
          <div className="h1MainBox">
            <div className="h1Main">
              <h1>BOOK LOVERS</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flip12">
        <div className="flip">
          <Flip />
        </div>
        {/* <div className="about">
          <h1>ABOUT US</h1>
          <About />
        </div> */}
        <div className="flip2">
          <Flip2 />
        </div>
      </div>
      <div>
        <div
          style={{
            width: 1100,
            height: 250,
            marginTop: 150,
            marginLeft: 300,
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: 35 }}>ABOUT US</h1>
          <About />
        </div>
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
    </div>
  );
};

export default Home;
