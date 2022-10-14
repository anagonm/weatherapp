import React  from "react";
import { useWeather } from "../../providers/weatherContext";
import { getHour } from "../../utils";
import Loader from "../Loader";
import Sunset from "../../assets/sunset.png"
import Sunrise from "../../assets/sunrise.png"

const AdditionalWidget = () => {
  const { weatherData } = useWeather();

  if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
    return <Loader />
  }

  const { sunrise, sunset } = weatherData.data.sys;

  return (
    <div className="weather-extra-wrapper my-other-step">
      <div className="widget weather-extra bg-extra3">
          <img src={Sunrise} alt="sunrise" />
          <h3>{getHour(sunrise)}</h3>
      </div>
      <div className="widget weather-extra bg-extra4 mb-0">
          <img src={Sunset} alt="sunset" />
          <h3>{getHour(sunset)}</h3>
      </div>
    </div>
  )
}

export default AdditionalWidget;