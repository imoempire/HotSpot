import React from "react";
import { data } from "../Utils/data";
import Card from "./Card/Card";
import './styles.css'

const Featured = () => {
  return (
    <div className="Featured">
      <div className="Title">
         <span>Featured</span>
      </div>
      <div className="FeaturedCard">
      {data.map(({ id, name, rates, location }) => {
         return <Card key={id} name={name} rate={rates} location={location} />;
      })}
      </div>
    </div>
  );
};

export default Featured;
