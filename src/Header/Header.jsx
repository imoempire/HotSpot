import React, { useRef, useState } from "react";
import { itemList } from "../Utils/data";
import "./styles.css";

const Header = () => {
  const form = useRef();
  const [filteredList, setFilteredList] = useState("");

  const [area, setArea] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const result = itemList.filter(function (freelancer) {
      const word = freelancer.city.toLowerCase();
      return word === area.toLowerCase();
    });
    setFilteredList(result);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="inners">
          {/* Text */}
          <div className="headerText">
            <div className="headerInner">
              <div>
                <span className="stroke-Text">Best </span>
              </div>
              <div>
                <span>Spots around</span>
              </div>
              <div>
                <span> you</span>
              </div>
            </div>
          </div>

          {/* Searching */}
          <div className="forms">
            <form ref={form} className="contact__form" onSubmit={handleSearch}>
              <div className="contact__form-group">
                <div className="contact__form-div">
                  <input
                    type="text"
                    name="area"
                    onChange={(e) => setArea(e.target.value)}
                    value={area}
                    className="contact__form-input"
                    placeholder="Your area"
                  />
                </div>
              </div>
              <button type="submit" className="btns">
                Search
              </button>
            </form>
          </div>
          {/* end */}
        </div>

        <div>
          {filteredList.length !== 0 ? (
            <h1 style={{ color: "white" }}>Your search result</h1>
          ) : null}
          {filteredList.length === 0 ? (
            null
          ) : (
            <div className="searchResult grid">
              {filteredList.map((item) => (
                <div className="searchCard grid" key={item.id}>
                  <h1>{item.region}</h1>
                  <h1>{item.city}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
