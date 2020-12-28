import React from "react";
 import "../styles/Card.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
function Card({ confirmed, recovered, deaths }) {
  return (
    <div className="card shadow">
      <div className="card__cases">
        <iframe
        title="3d"
          id="afe625bd-4172-4338-bcb5-b07a17fb9050"
          src="https://www.vectary.com/viewer/v1/?model=afe625bd-4172-4338-bcb5-b07a17fb9050&env=studio3"
          frameborder="0"
          width="100%"
          height="480"
        ></iframe>
        <h3 className="card__casesTitle">Total Cases</h3>
        <div className="card__casesInfo">
          <h3>{confirmed}</h3>
          <ArrowDropUpIcon className="green" />
        </div>
      </div>
      <div className="card__infoContainer">
        <div className="card__info">
          <p>Confirmed</p>
          <span>{confirmed}</span>
        </div>

        <div className="card__info">
          <p> Recovered</p>
          <span>{recovered}</span>
        </div>

        <div className="card__info">
          <p> Deaths</p>
          <span>{deaths}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
