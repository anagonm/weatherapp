import React from "react";
import { useWeather } from "../providers/weatherContext";

const Search = () => {
  const { city, setCity, searchByCity } = useWeather();
  return (
    <div className="search">
      <input type='text' placeholder="Search by city..." value={city} onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={searchByCity} className="my-first-step">Search</button>
    </div>
  );
}

export default Search;