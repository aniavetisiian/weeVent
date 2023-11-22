import React from "react";
import Cards from "../posts/Cards";
import "./MainContent.css";

const MainContent = (props) => {
  return (
    <main className="mainContent">
      <div className="content">
        <Cards data={props.data} submit={props.submit} />
      </div>
    </main>
  );
};

export default MainContent;
