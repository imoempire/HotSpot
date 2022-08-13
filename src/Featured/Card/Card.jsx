import React from "react";
import "./styles.css";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdOutlineNoFood } from "react-icons/md";

const Card = ({ name, rate, location }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url('https://continenttours.com/wp-content/uploads/2021/08/The-Buka-African-Restaurant.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="cardItems">
        <div className="info">
          <div className="cardName">
            <span>
              <MdOutlineNoFood />
            </span>
            <span>{name}</span>
          </div>
          <div className="cardLocation">
            <span>
              <GoLocation />
            </span>
            <span>{location}</span>
          </div>
        </div>
        <div className="cardRates">
          <span>
            <AiFillStar />
          </span>
          <span>{rate}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
