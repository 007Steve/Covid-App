import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import DataContainer from "./components/DataContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <SideBar />
        <DataContainer />
      </div>
    </div>
  );
}

export default App;
