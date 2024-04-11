import React, { useState } from "react";
import Map from "./components/map/Map.js";
import Weather from "./components/weather/Weather.js";
import "./App.css";

const App = () => {
  const [city, setCity] = useState({});

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="app">
      <Map place={city} />
      <Weather onChange={handleCityChange} />
    </div>
  );
};

export default App;
