import React, { useState, useEffect } from "react";
import "../styles/DataContainer.css";
import Circle from "./Circle";
import { selectInput } from "../features/inputSlice";
import { useSelector } from "react-redux";

function DataContainer() {
  const [countries, setCountries] = useState([]);
  const inputs = useSelector(selectInput);

  // fetch the global data stats
  useEffect(() => {
    async function fetchData() {
      fetch(`https://disease.sh/v3/covid-19/countries/${inputs}`)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    }
    fetchData();
  }, [inputs]);

  return (
    <div className="datacontainer">
      <div className="datacontainer__top">
        <p className="datacontainer__country">Country</p>
        <h4 className="datacontainer__countyName">{countries.country}</h4>
      </div>
      <div className="datacontainer__center">
        <Circle
          height="130px"
          width="130px"
          colorOne="575AC6"
          colorTwo="AE92EC"
          position="relative"
          top="100px"
          left="40px"
          right=""
          bottom=""
          title=""
          name="Total Recovered"
          number={countries.recovered}
        />
        {/* center circle */}
        <Circle
          height="250px"
          width="250px"
          colorOne="F7AEB4"
          colorTwo="DE69C3"
          position="relative"
          top="200px"
          left="220px"
          right=""
          bottom=""
          title=""
          name="Total Cases"
          number={countries.cases}
        />
        <Circle
          height="150px"
          width="150px"
          colorOne="F7AEB4"
          colorTwo="DE69C3"
          position="relative"
          top="350px"
          left="340px"
          right=""
          bottom="140px"
          title=""
          name="Total Deaths"
          number={countries.deaths}
        />
        <Circle
          height="170px"
          width="170px"
          colorOne="575AC6"
          colorTwo="AE92EC"
          position="relative"
          top="50px"
          left="150px"
          right=""
          bottom=""
          title=""
          name="Total Tests"
          number={countries.tests}
        />

        <Circle
          height="120px"
          width="120px"
          colorOne="F7AEB4"
          colorTwo="DE69C3"
          position="relative"
          top="50px"
          left=""
          right="550px"
          bottom=""
          title=""
          name="Active Cases"
          number={countries.active}
        />
        
        <Circle
          height="30px"
          width="30px"
          colorOne="575AC6"
          colorTwo="AE92EC"
          position="relative"
          top="100px"
          left=""
          right=""
          bottom=""
          title=""
          name=""
          number=""
        />
        <Circle
          height="100px"
          width="100px"
          colorOne="575AC6"
          colorTwo="AE92EC"
          position="relative"
          top="170px"
          left="40px"
          right=""
          bottom=""
          title=""
          name=""
          number=""
        />
      </div>
    </div>
  );
}

export default DataContainer;
