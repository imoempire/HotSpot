import React from "react";
import "./styles.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="contents">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="details">
            <div className="socials"></div>
            <div className="contact">
               <ul className="contents-list">
                  <ul className="list">
                    <li>Pages</li>
                     <li>Home</li>
                     <li>About</li>
                     <li>Location</li>
                  </ul>
                  <ul className="list">
                    <li>Contact</li>
                     <li>email</li>
                     <li>Phone</li>
                     <li>WhatsApp</li>
                  </ul>
                  <ul className="list">
                    <li>Social Links</li>
                     <li>Facebook</li>
                     <li>Twitter</li>
                     <li>Instagram</li>
                     <li>Instagram</li>
                  </ul>
               </ul>
            </div>
          </div>
        </div>
          <hr />
        <div className="copyright">
          <span className="copy">&copy; 2022.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
