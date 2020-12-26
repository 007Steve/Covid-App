import React from "react";
import "../styles/Card.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Card() {
  return (
    <div className="card shadow">
      <div className="card__cases">
        <h3 className="card__casesTitle">Total Cases</h3>
        <div className="card__casesInfo">
          <h3>12455</h3>
          <ArrowDropUpIcon  className="green"/>
        </div>
      </div>
      <div className="card__infoContainer">
        <div className="card__info">
          <p>Confirmed</p>
          <span>1222</span>
        </div>

        <div className="card__info">
          <p> Recovered</p>
          <span>1222</span>
        </div>

        <div className="card__info">
          <p> Deaths</p>
          <span>1222</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
