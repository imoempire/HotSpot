import React from "react";
import { IoFastFood } from "react-icons/io5";
const MapMarker = ({ name, key }) => {
  return (
    <div key={key}>
      <span className="brand-red" style={{ color: "red", fontWeight: "bold" }}>
        {name}
      </span>
      <IoFastFood size={20} color={"red"} />
    </div>
  );
};

export default MapMarker;
