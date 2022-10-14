import React  from "react";
import './Dashboard.css';
import { useWeather } from "../../providers/weatherContext";
import CurrentWidget from "../widgets/CurrentWidget";
import AirPollutionWidget from "../widgets/AirPollutionWidget";
import AdditionalWidget from "../widgets/AdditionalWidget";
import DailyWidget from "../widgets/DailyWidget";
import Joyride from 'react-joyride';

const Dashboard = () => {
  const { searchByCity, setCity, city, steps } = useWeather();

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <Joyride
          steps={steps}
        />

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
    </div>
  )
}

export default Dashboard;