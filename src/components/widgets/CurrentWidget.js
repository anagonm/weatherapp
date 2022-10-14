import React from "react";
import { useWeather } from "../../providers/weatherContext";
import { convertKelvinToFahrenheit, getDay, getMonth, getWeatherIcon } from "../../utils";
import Loader from "../Loader";

const CurrentWidget = () => {
  const { weatherData } = useWeather();

  if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
    return <Loader />
  }

  const fullWeatherInfo = weatherData.data;
  const { main, name: location, weather } = fullWeatherInfo;
  const { temp } = main;
  const { main: mainDetail, icon, description } = weather[0];

  return (
    <div className="widget weather-detail">
      <h2>{location}</h2>
      <img className="icon" src={getWeatherIcon(icon)} alt={icon} />
      <p>{description}</p>
      <h3>{Math.trunc(convertKelvinToFahrenheit(temp))}º</h3>
      <p>{mainDetail}</p>
    </div>
  );
}

export default CurrentWidget;
