import React  from "react";
import { useWeather } from "../../providers/weatherContext";
import { convertKelvinToFahrenheit } from "../../utils";
import Loader from "../Loader";

const AdditionalWidget = () => {
  const { weatherData } = useWeather();

  if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
    return <Loader />
  }

  const { temp, feels_like, humidity, pressure, temp_max, temp_min } = weatherData.data.main;

  return (
    <div className="weather-extra-wrapper">
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
  )
}

export default AdditionalWidget;