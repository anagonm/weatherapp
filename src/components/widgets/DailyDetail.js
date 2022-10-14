import React from "react";
import { getDay, getHour, getMonth, getWeatherIcon } from "../../utils";



const DailyDetail = ({ data }) => {
  const {
    dt,
    clouds, // { all }
    main, // feels_like, grnd_level, humidity, pressure, sea_level, temp, temp_max, temp_min
    pop,
    rain, // 3h
    weather, // [{description, icon, main}]
    wind // deg, gust, speed
  } = data;
  return (
    <div className="widget daily-item">
      <p>{getMonth(dt)} {getDay(dt)}</p>
      <p>{getHour(dt)}</p>
      <img className="icon" src={getWeatherIcon(weather[0].icon)} alt=""/>
      <p>Clouds ({clouds.all}%)</p>
      <p>Weather ({weather[0].main})</p>
    </div>
  );
}

export default DailyDetail;
