import React from "react";
import "./card.css";

const Card = ({ title = "cases", src = "sourcse", value = "nil" }) => {
  return (
    <div className="Card">
    <div>
    <span>
        <p>
          {title} <img style={{ width: "20px" }} src={src} alt="logo" />
        </p>
      </span>
      <span>
        <h2> {value} </h2>
      </span>
    </div>
    <div>
      <img style={{ width: "20px" }} src={src} alt="logo" />
    </div>
      
    </div>
  );
};

export default Card;
