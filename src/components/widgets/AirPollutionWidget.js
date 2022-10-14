import React from "react";
import { useWeather } from "../../providers/weatherContext";
import Loader from "../Loader";

// https://openweathermap.org/api/air-pollution
const airPollutionQuality = {
  '1': 'Good Quality',
  '2': 'Fair Quality',
  '3': 'Moderate Quality',
  '4': 'Poor Quality',
  '5': 'Very Poor Quality'
};

const AirPollutionWidget = () => {
  const { airPollutionData, weatherData } = useWeather();

  if (airPollutionData.loading || Object.keys(airPollutionData.data).length === 0) {
    return <Loader />
  }

  // It comes in an array with only one object from the OpenWeather API
  const pollutionInfo = airPollutionData.data.list[0];
  const { name: location } = weatherData.data;
  const { main, components } = pollutionInfo;
  const { aqi } = main;
  const quality = Math.trunc(Math.floor(aqi));

  return (
    <>
      <h4>{location} Air Pollution</h4>
      <p>{airPollutionQuality[quality]}</p>
      <div className="flex-wrapper">
        <div className="flex-item">
          <p><span>CO</span> | <span>{components.co}</span></p>
          <p><span>Nh3</span> | <span>{components.nh3}</span></p>
          <p><span>NO</span> | <span>{components.no}</span></p>
          <p><span>No2</span> | <span>{components.no2}</span></p>
        </div>
        <div className="flex-item">
          <p><span>O3</span> | <span>{components.o3}</span></p>
          <p><span>Pm2 5</span> | <span>{components.pm2_5}</span></p>
          <p><span>Pm 10</span> | <span>{components.pm10}</span></p>
          <p><span>So2</span> | <span>{components.so2}</span></p>
        </div>
      </div>
    </>
  );
}

export default AirPollutionWidget;
