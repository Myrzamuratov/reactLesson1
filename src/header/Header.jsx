import React from "react";
import backimg from "../img/IMAGE (1).png";
import frontimg from "../img/IMAGE (2).png";
import img4 from "../img/IMAGE (4).png";
import img5 from "../img/IMAGE (5).png";
import img6 from "../img/IMAGE (6).png";
import img7 from "../img/IMAGE (7).png";
import img8 from "../img/IMAGE (8).png";
import img9 from "../img/IMAGE (9).png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header_text">
          <h1>Discover, nurture, bloom</h1>
          <p>Product & Engineering Recruitment</p>
          <p>va va bloom, with a human touch and a dash of</p>
        </div>

        <img className="backImage" src={backimg} alt="" />
        <img className="frontImage" src={frontimg} alt="" />
      </div>
      <div className="white">
        <ul>
          <li className="white_images">
            <img src={img9} alt="" />
          </li>
          <li className="white_images">
            <img src={img4} alt="" />
          </li>
          <li className="white_images">
            <img src={img5} alt="" />
          </li>
          <li className="white_images">
            <img src={img6} alt="" />
          </li>
          <li className="white_images">
            <img src={img7} alt="" />
          </li>
          <li className="white_images">
            <img src={img8} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
