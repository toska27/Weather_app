import React from "react";
import Map from "./components/map/Map.js";
import Weather from "./components/weather/Weather.js";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Map />
      <Weather />
    </div>
  );
};

export default App;
