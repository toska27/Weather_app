import React from "react";
import {
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
  FaWind,
  FaCloudRain,
} from "react-icons/fa6";
import { CgCompressRight } from "react-icons/cg";
import "./Info.css";

const Info = ({ city }) => {
  const name = city.hasOwnProperty("name")
    ? `${city.name}, ${city.sys.country}`
    : "";
  const temp = city.hasOwnProperty("main")
    ? `${Math.round(city.main.temp)}°C | ${city.weather[0].description}`
    : "";
  const wind = city.hasOwnProperty("main") ? city.wind.speed : "";
  const pressure = city.hasOwnProperty("main") ? city.main.pressure : "";
  const humidity = city.hasOwnProperty("main") ? city.main.humidity : "";
  const temp_max = city.hasOwnProperty("main")
    ? Math.round(city.main.temp_max)
    : "";
  const temp_min = city.hasOwnProperty("main")
    ? Math.round(city.main.temp_min)
    : "";

  return (
    <div className="info">
      <div className={city.hasOwnProperty("name") ? "hide" : "show"}>
        <h3>Weather Station</h3>
        <h6>Search for a city</h6>
      </div>

      <div className={city.hasOwnProperty("name") ? "show" : "hide"}>
        <h2>{name}</h2>
        <h3>{temp}</h3>
        <div className="parameters">
          <p>
            Max temp {temp_max}°C <FaTemperatureArrowUp />
          </p>
          <p>
            Min temp {temp_min}°C <FaTemperatureArrowDown />
          </p>
          <p>
            Wind speed {wind}m/s <FaWind />
          </p>
          <p>
            Humidity {humidity}% <FaCloudRain />
          </p>
          <p>
            Pressure {pressure}mb <CgCompressRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
