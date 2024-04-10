import React, { useState } from "react";
import Search from "../search/Search.js";
import Info from "../info/Info.js";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState({});

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="weather">
      <Search onChange={handleCityChange} />
      <Info city={city} />
    </div>
  );
};

export default Weather;
