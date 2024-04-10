import React from "react";
import "./Info.css";

const Info = ({ city }) => {
  console.log(city);
  const name = city.hasOwnProperty("name")
    ? `${city.name}, ${city.sys.country}`
    : "";
  const temp = city.hasOwnProperty("main")
    ? `${city.main.temp}°C | ${city.weather[0].description}`
    : "";
  const wind = city.hasOwnProperty("main") ? city.wind.speed : "";
  const pressure = city.hasOwnProperty("main") ? city.main.pressure : "";
  const humidity = city.hasOwnProperty("main") ? city.main.humidity : "";
  const temp_max = city.hasOwnProperty("main") ? city.main.temp_max : "";
  const temp_min = city.hasOwnProperty("main") ? city.main.temp_min : "";

  return (
    <div className="info">
      <div className={city.hasOwnProperty("name") ? "hide" : "show"}>
        <h3>Weather Station</h3>
        <h6>Search for a city</h6>
      </div>

      <div className={city.hasOwnProperty("name") ? "show" : "hide"}>
        <h2>{name}</h2>
        <h4>{temp}</h4>
        <div className="parameters">
          <p>pressure:{pressure}</p>
          <p>wind speed: {wind}</p>
          <p>max temp: {temp_max}°C</p>
          <p>min temp: {temp_min}°C</p>
          <p>humidity: {humidity}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
