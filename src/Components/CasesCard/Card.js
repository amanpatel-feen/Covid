import React from "react";
import "./card.css";
import bg from '../../assets/BG.svg'

const Card = ({ title = "cases", src = "source",src1 = "sources", value = "nil" }) => {
  return (
    <div className="Card" >
    <div className="CardData">
    <span>
        <span>
          {title} <img style={{ width: "20px" }} src={src} alt="logo" />
        </span>
      </span>
      <span>
        <h2 className="h2"> {value} </h2>
      </span>
    </div>
    <div>
      <img  src={src1} alt="logo" />
    </div>
      
    </div>
  );
};

export default Card;
