import React from "react";
import "./styles.css";

// Logo import
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="itemList">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Subscription</a>
            </li>
          </ul>
        </div>
        <div className="otherList">
          <ul>
            <li>
              <a href="#">Add Your Spot</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
