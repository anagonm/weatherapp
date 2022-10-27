import React  from "react";
import { useWeather } from "../../providers/weatherContext";
import { getHour } from "../../utils";
import Sunrise from "../../assets/sunrise.png"
import Sunset from "../../assets/sunset.png"
import Loader from "../Loader";

const AdditionalWidget = () => {
  const { weatherData } = useWeather();

  if (!weatherData || !weatherData.data) {
    return <Loader />
  }

  if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
    return <Loader />
  }

  const { sunrise, sunset } = weatherData.data.sys;

  return (
    <div className="weather-extra-wrapper my-other-step">
      <div className="widget weather-extra bg-extra1">
        <img src={Sunrise} alt="sunrise" />
        <h4 data-testid="sunrise">{getHour(sunrise)}</h4>
      </div>
      <div className="widget weather-extra bg-extra4 mb-0">
        <img src={Sunset} alt="sunset" />
        <h4 data-testid="sunset">{getHour(sunset)}</h4>
      </div>
    </div>
  )
}

export default AdditionalWidget;