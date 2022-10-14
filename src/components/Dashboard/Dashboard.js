import React, { useState }  from "react";
import './Dashboard.css';
import { useWeather } from "../../providers/weatherContext";
import CurrentWidget from "../widgets/CurrentWidget";
import AirPollutionWidget from "../widgets/AirPollutionWidget";
import AdditionalWidget from "../widgets/AdditionalWidget";
import DailyWidget from "../widgets/DailyWidget";
import Modal from "../Modal";
import Notification from "../Notification";
import { getLocalStorageItem } from "../../utils";
// import Joyride from 'react-joyride';

const Dashboard = () => {
  const { modal, hideModal, searchByCity, setCity, city, steps, weatherData, hideError, info, hideInfo } = useWeather();

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


  // const renderInfoClipboard = () => <Notification message={info} hideNotification={hideInfo} type="info" />


  return (
    <div className="main-container">
      <div className="main-wrapper">
        {/* <Joyride
          steps={steps}
        /> */}
        <div className="main-content">
          <div className="main-title">
            <div className="search">
              <input type='text' placeholder="Search by city..." value={city} onChange={(e) => setCity(e.target.value)}></input>
              <button onClick={searchByCity} className="my-first-step">Search</button>
            </div>
            <div className="title">
              <h1>WeatherApp</h1>
            </div>
          </div>
          <DailyWidget />
          <h3 className="widget-title">More data from OpenWeather</h3>
          <div className="flex-wrapper">
            <div className="flex-item widget">
              <AdditionalWidget />
            </div>
            <div className="flex-item widget">
              <AirPollutionWidget />
            </div>
          </div>
        </div>

        {/* Day detail current weather */}
        <div className="detail-content">
          <CurrentWidget />
        </div>

      </div>

      {renderError(weatherData)}
      {modal && renderModal()}
      {info && <Notification message={info} hideNotification={hideInfo} type="info" />}

    </div>
  )
}

export default Dashboard;