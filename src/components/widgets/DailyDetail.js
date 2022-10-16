import React from "react";
import {
  convertKelvinToFahrenheit,
  getDay,
  getHour,
  getMonth,
  getWeatherIcon
} from "../../utils";

const DailyDetail = ({ data }) => {
  const { dt, clouds, main, weather } = data;

  return (
    <div className="widget daily-item">
      <p>{getMonth(dt)} {getDay(dt)}</p>
      <p>{getHour(dt)}</p>
      <img className="icon" src={getWeatherIcon(weather[0].icon)} alt=""/>
      <h3>{convertKelvinToFahrenheit(main.temp)}º</h3>
      <p>Clouds | {clouds.all}%</p>
      <p>{weather[0].description}</p>
    </div>
  );
}

export default DailyDetail;
