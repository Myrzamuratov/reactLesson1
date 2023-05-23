import React from "react";
import img from "../img/Frame (6).png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src={img} alt="" />
      <ul className="navbar_list">
        <li className="navbar_list_item">Grow your career</li>
        <li className="navbar_list_item">Build a team</li>
        <li className="navbar_list_item">Meet the founders</li>
        <li className="navbar_list_item">Mentorship</li>
        <li className="navbar_list_item">Say hello</li>
      </ul>
    </div>
  );
}

export default Navbar;
