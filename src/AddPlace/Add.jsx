import React from "react";
import "./style.css";
import place from "../assets/place.jpg";

const Add = () => {
  return (
    <div className="container">
      <div className="add">
        <div className="Text">
          <div className="text">Want to add a new Place</div>
          <div className="btn">I Know A Place</div>
        </div>
        <div className="Image">
          <img src={place} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Add;
