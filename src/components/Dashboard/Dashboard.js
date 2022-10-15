import React from "react";
import './Dashboard.css';
import { useWeather } from "../../providers/weatherContext";
import CurrentWidget from "../widgets/CurrentWidget";
import AirPollutionWidget from "../widgets/AirPollutionWidget";
import AdditionalWidget from "../widgets/AdditionalWidget";
import DailyWidget from "../widgets/DailyWidget";
import Modal from "../Modal";
import Notification from "../Notification";
import { getLocalStorageItem } from "../../utils";
import Search from "../Search";

const Dashboard = () => {
  const { modal, hideModal, weatherData, hideError, info, hideInfo } = useWeather();

  const renderError = (weatherData_) => {
    if (weatherData_ && weatherData_.error) {
      return <Notification message={weatherData_.error} hideNotification={hideError} type="error" />
    }
  }

  const renderModal = () => {
    const welcomeModal = getLocalStorageItem("welcomeModal");
    if (!welcomeModal) {
      return <Modal hideModal={hideModal} />
    }
  };

  return (
    <div className="main-container" data-testid="main-container">
      <div className="main-wrapper">
        <div className="main-content">
          <div className="main-title">
            <Search />
            <div className="title">
              <h1>WeatherApp</h1>
            </div>
          </div>
          {/* Forecast 5 days */}
          <DailyWidget />
          <h3 className="widget-title">More data from OpenWeather</h3>
          <div className="flex-wrapper">
            {/* Sys */}
            <div className="flex-item widget">
              <AdditionalWidget />
            </div>
            {/* AirPollution */}
            <div className="flex-item widget">
              <AirPollutionWidget />
            </div>
          </div>
        </div>
        {/* Current weather detail */}
        <div className="detail-content">
          <CurrentWidget />
        </div>
      </div>

      { renderError(weatherData) }
      { modal && renderModal() }
      { info && <Notification message={info} hideNotification={hideInfo} type="info" /> }

    </div>
  )
}

export default Dashboard;