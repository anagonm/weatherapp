import React from "react";
import '../styles/Dashboard.css';
import { getLocalStorageItem } from "../utils";
import { LOCAL_STORAGE_KEY_WELCOME_MODAL } from "../utils/constants";
import { useWeather } from "../providers/weatherContext";
import AirPollutionWidget from "./widgets/AirPollutionWidget";
import AdditionalWidget from "./widgets/AdditionalWidget";
import CurrentWidget from "./widgets/CurrentWidget";
import DailyWidget from "./widgets/DailyWidget";
import Notification from "./Notification";
import Search from "./Search";
import Modal from "./Modal";

const Dashboard = () => {
  const {
    modal,
    hideModal,
    weatherData,
    error,
    hideError,
    info,
    setInfo
  } = useWeather();

  const renderErrorIfAny = () => {
    if ((weatherData && weatherData.error) || error) {
      let withError = error;
      if (weatherData && weatherData.error) {
        withError = weatherData.error;
      }
      return <Notification message={withError} hideNotification={hideError} type="error" />
    }
  }

  const renderNotificationIfAny = () => {
    if (info) {
      return <Notification message={info} hideNotification={() => setInfo(undefined)} type="info" />
    }
  }

  const renderModalIfNeeded = () => {
    if (!modal) {
      return;
    }

    const welcomeModal = getLocalStorageItem(LOCAL_STORAGE_KEY_WELCOME_MODAL);
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

      { renderErrorIfAny() }
      { renderModalIfNeeded() }
      { renderNotificationIfAny() }

    </div>
  )
}

export default Dashboard;