import React from "react";
import { useWeather } from "../../providers/weatherContext";
import { convertKelvinToFahrenheit, getWeatherIcon } from "../../utils";
import Loader from "../Loader";

const CurrentWidget = () => {
  const { weatherData } = useWeather();

  if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
    return <Loader />
  }

  const fullWeatherInfo = weatherData.data;
  const { main, name: location, weather } = fullWeatherInfo;
  const { temp } = main;
  // // It comes in an array with only one object from the OpenWeather API
  const { main: mainDetail, icon } = weather[0];

  return (
    <div className="widget weather-detail">
      <img className="icon" src={getWeatherIcon(icon)} alt={icon} />
      <p>{location}</p>
      <h3>{Math.trunc(convertKelvinToFahrenheit(temp))}º</h3>
      <p>{mainDetail}</p>
    </div>
  );
}

export default CurrentWidget;
