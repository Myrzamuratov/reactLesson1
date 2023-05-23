import React from "react";
import icon from "../img/Google icon.png";
import rating from "../img/Rating.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="rectangle">
        <img src={icon} alt="" />
        <div className="footer_list">
          <p className="footer_list_p1">
            5.0 <img className="rating" src={rating} alt="" />
          </p>
          <p className="footer_list_p2">Based on 106 reviews</p>
        </div>
      </div>
      <ul>
        <li>Grow your career</li>
        <li>Build a team</li>
      </ul>
      <ul>
        <li>Meet the founders</li>
        <li>Mentorship</li>
        <li>Say hello</li>
      </ul>
    </div>
  );
};

export default Footer;
