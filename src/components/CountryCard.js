import React from 'react'
import "../styles/CountryCard.css"
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function CountryCard({name,oldCase,newCase}) {
    return (
        <div className="countrycard ">
           
                <p>{name}</p>
                <span>{oldCase}</span>
                <p>{newCase}</p>
                <ArrowDropDownIcon className="red"/>
           
        </div>
    )
}

export default CountryCard
