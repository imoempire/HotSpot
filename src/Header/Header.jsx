import React, { useRef } from "react";
import "./styles.css";

const Header = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Done");
  };

  return (
    <div className="container">
      <div className="header">

      <div className="headerText">
        <div className="headerInner">
        <div>
          <span className="stroke-Text">Best </span>
        </div>
        <div>
          <span>Spots</span>
        </div>
        <div>
          <span>around you</span>
        </div>
        </div>
      </div>

      <div className="forms">
        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="Your City"
                className="contact__form-input"
                placeholder="Your City"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                name="area"
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

    </div>
    </div>
  );
};

export default Header;
