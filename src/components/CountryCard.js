import React from "react";
import "../styles/CountryCard.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function CountryCard({ name, oldCase, newCase }) {
    const up = newCase 
    console.log(up)
  return (
    <div className="countrycard ">
      <p>{name}</p>
      <span></span>
      <p></p>
      {up?  <ArrowDropUpIcon className="green" /> : <ArrowDropDownIcon className="red" />}
     
    </div>
  );
}

export default CountryCard;
