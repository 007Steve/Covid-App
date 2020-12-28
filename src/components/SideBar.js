import React, { useState, useEffect } from "react";
import "../styles/SideBar.css";
import Card from "../components/Card";
import CountryCard from "./CountryCard";
function SideBar() {
  const [global, setGlobal] = useState([]);
  const [countries, setCountries] = useState([]);

  // fetch the global data stats
  useEffect(() => {
    async function fetchData() {
      fetch(`https://disease.sh/v3/covid-19/all`)
        .then((response) => response.json())
        .then((data) => setGlobal(data));
    }

    fetchData();
  }, []);
  // fetch the countries list
  useEffect(() => {
    async function countriesData() {
      fetch(`https://disease.sh/v3/covid-19/countries`)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    }

    countriesData();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <h2> Global Statistics</h2>
        <Card
          confirmed={global.cases}
          recovered={global.recovered}
          deaths={global.deaths}
        />
        {setCountries ? setCountries : "loading"}

        <div className="sidebar__countries shadow">
          {countries.map((data) => (
            <CountryCard
              name={data.country}
              oldCase={data.cases}
              newCase={data.todayCases}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
