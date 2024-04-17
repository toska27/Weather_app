import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const api = {
  key: "0c36b163a78a5fbc6fdb1348339cca1e",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Search = ({ onChange }) => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        onChange(result);
        setSearch("");
      });
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchPressed}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
