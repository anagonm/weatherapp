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
  const { airPollutionData } = useWeather();

  if (airPollutionData.loading || Object.keys(airPollutionData.data).length === 0) {
    return <Loader />
  }

  // It comes in an array with only one object from the OpenWeather API
  const pollutionInfo = airPollutionData.data.list[0];
  const { main, components } = pollutionInfo;
  const { aqi } = main;
  const quality = Math.trunc(Math.floor(aqi));

  return (
    <>
      <div className="air-title">
        <h4>Your Current Air Pollution</h4>
        <p>{airPollutionQuality[quality]}</p>
      </div>
      <div className="flex-wrap">
          <div className="air-data">
            <span>1</span>
            <h4>CO</h4>
            <p>{components.co}</p>
          </div>
          <div className="air-data">
            <span>2</span>
            <h4>Nh3</h4>
            <p>{components.nh3}</p>
          </div>
          <div className="air-data">
            <span>3</span>
            <h4>NO</h4>
            <p>{components.no}</p>
          </div>
          <div className="air-data">
            <span>3</span>
            <h4>No2</h4>
            <p>{components.no2}</p>
          </div>
          <div className="air-data">
            <span>3</span>
            <h4>O3</h4>
            <p>{components.o3}</p>
          </div>
          <div className="air-data">
            <span>3</span>
            <h4>Pm2 5</h4>
            <p>{components.pm2_5}</p>
          </div>
          <div className="air-data">
            <span>3</span>
            <h4>Pm 10</h4>
            <p>{components.pm10}</p>
          </div>
          <div className="air-data">
            <span>3</span>
            <h4>So2</h4>
            <p>{components.so2}</p>
          </div>
      </div>
    </>
  );
}

export default AirPollutionWidget;
