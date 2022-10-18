import React from "react";
import PropTypes from 'prop-types';
import {
  convertKelvinToFahrenheit,
  getDay,
  getHour,
  getMonth,
  getWeatherIcon
} from "../../utils";

const DailyDetail = ({ data }) => {
  if (!data) {
    return null;
  }

  const { dt, clouds, main, weather } = data;

  return (
    <div className="widget daily-item" data-testid="daily-item">
      <p>{getMonth(dt)} {getDay(dt)}</p>
      <p>{getHour(dt)}</p>
      <img className="icon" src={getWeatherIcon(weather[0].icon)} alt=""/>
      <h3>{convertKelvinToFahrenheit(main.temp)}º</h3>
      <p>Clouds | {clouds.all}%</p>
      <p data-testid="daily-description">{weather[0].description}</p>
    </div>
  );
}

DailyDetail.propTypes = {
  data: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    clouds: PropTypes.shape({
      all: PropTypes.number.isRequired
    }).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string
      })
    )
  }).isRequired
}

export default DailyDetail;
