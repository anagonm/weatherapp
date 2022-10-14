import React from "react";
import { useWeather } from "../../providers/weatherContext";
import { convertKelvinToFahrenheit, getWeatherIcon } from "../../utils";
import Loader from "../Loader";

const CurrentWidget = () => {
  const { weatherData, generateLink, resetApp } = useWeather();

  if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
    return <Loader />
  }

  const fullWeatherInfo = weatherData.data;
  const { main, name: location, weather } = fullWeatherInfo;
  const { temp, feels_like, humidity, pressure, temp_max, temp_min } = main;
  const { main: mainDetail, icon, description } = weather[0];

  return (
    <>
      <div className="widget weather-detail">
        <h2>{location} <p onClick={generateLink}>Share</p> | <p onClick={resetApp}>Reset</p></h2>
        <img className="icon" src={getWeatherIcon(icon)} alt={icon} />
        <p>{description}</p>
        <h3>{Math.trunc(convertKelvinToFahrenheit(temp))}º</h3>
        <p>{mainDetail}</p>
      </div>
      <div className="weather-extra-wrapper my-other-step">
        <div className="widget weather-extra bg-extra1">
            <p><span>Temp</span> | <span>{Math.trunc(convertKelvinToFahrenheit(temp))}º</span></p>
            <p><span>Feels like</span> | <span>{Math.trunc(convertKelvinToFahrenheit(feels_like))}º</span></p>
        </div>
        <div className="widget weather-extra bg-extra2">
            <p><span>Humidity</span> | <span>{humidity}</span></p>
            <p><span>Pressure</span> | <span>{pressure}</span></p>
        </div>
        <div className="widget weather-extra bg-extra3">
          <p><span>Temp max</span> | <span>{Math.trunc(convertKelvinToFahrenheit(temp_max))}º</span></p>
          <p><span>Temp min</span> | <span>{Math.trunc(convertKelvinToFahrenheit(temp_min))}º</span></p>
        </div>
      </div>
    </>
  );
}

export default CurrentWidget;
