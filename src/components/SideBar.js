import React from "react";
import "../styles/SideBar.css";
import Card from "../components/Card";
import CountryCard from "./CountryCard";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <h2>Statistics</h2>
        <Card />
        
        <div className="sidebar__countries shadow">
          <CountryCard name="USA" oldCase="1233" newCase="2332" />
          <CountryCard name="USA" oldCase="1233" newCase="2332" />
          <CountryCard name="USA" oldCase="1233" newCase="2332" />
          <CountryCard name="USA" oldCase="1233" newCase="2332" />
          <CountryCard name="USA" oldCase="1233" newCase="2332" />
          <CountryCard name="USA" oldCase="1233" newCase="2332" />
          <CountryCard name="USA" oldCase="1233" newCase="2332" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
