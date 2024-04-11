import React, { useState } from "react";
import Search from "../search/Search.js";
import Info from "../info/Info.js";
import "./Weather.css";

const Weather = ({ onChange }) => {
  const [city, setCity] = useState({});

  const handleCityChange = (newCity) => {
    setCity(newCity);
    onChange(newCity);
  };

  let divName = "weather";
  if (city.weather) {
    if (city.weather[0].description === "mist") {
      divName = "weather mist";
    } else if (
      city.weather[0].description === "broken clouds" ||
      city.weather[0].description === "scattered sky"
    ) {
      divName = "weather broken";
    } else if (city.weather[0].description === "clear sky") {
      divName = "weather clear";
    } else if (city.weather[0].description === "overcast clouds") {
      divName = "weather overcast";
    } else if (city.weather[0].description === "few clouds") {
      divName = "weather few";
    } else if (city.weather[0].description === "haze") {
      divName = "weather haze";
    }
  }

  return (
    <div className={divName}>
      <Search onChange={handleCityChange} />
      <Info city={city} />
    </div>
  );
};

export default Weather;
