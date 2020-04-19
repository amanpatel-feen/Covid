import React from "react";
import "./Navbar.css";
import icon from "../../assets/virus.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <img src={icon} alt="earth's antivirus" />
      </div>
      <div>
        <span>COVID'19</span>
      </div>
      <ul>
        <li>
          <Link to="/" className="itsnav">
            Home
          </Link>
        </li>
        <li>
          <Link to="/faq" className="itsnav">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/helpfullinks" className="itsnav">
            HelpFull Links
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;