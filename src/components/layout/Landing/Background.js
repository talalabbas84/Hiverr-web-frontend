import React from "react";

import "./index.css";
import Header from "./Header";
import Card from "./Cards";

import HiverIphone from "../../../asset/images/hiver-iphone.png";

const Background = () => {
  return (
    <div className="background-image .img-fluid. max-width: 100% ">
      <Header />
      <div className="main-wrapper">
        <Card />
        <div className="div-phone-img">
          <img src={HiverIphone} style={{ width: 400, marginTop: 100 }} />
        </div>
      </div>
    </div>
  );
};

export default Background;
