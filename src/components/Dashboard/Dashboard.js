import React  from "react";
import './Dashboard.css';
import { useWeather } from "../../providers/weatherContext";
import CurrentWidget from "../widgets/CurrentWidget";
import DailyDetail from "../widgets/DailyDetail";
import AirPollutionWidget from "../widgets/AirPollutionWidget";
import AdditionalWidget from "../widgets/AdditionalWidget";

const Dashboard = () => {
  const { searchByCity, setCity, city, weatherData } = useWeather();

  return (
    <div className="main-container">
      <div className="main-title">
        <div className="search">
          <input type='text' placeholder="Search by city..." value={city} onChange={(e) => setCity(e.target.value)}></input>
          <button onClick={searchByCity}>Search</button>
        </div>
        
        <>Weather app {JSON.stringify(weatherData.data)}</>

        <div className="title">
          <h2>Tuesday, October 14</h2>
          <p>07:46PM</p>
        </div>
      </div>
      
      <div className="main-wrapper">
        {/* Weekly and other data */}
        <div className="main-content">
          <div className="daily-widget">
            <DailyDetail />
            <DailyDetail />
            <DailyDetail />
            <DailyDetail />
            <DailyDetail />
            <DailyDetail />
            <DailyDetail />
            <DailyDetail />
          </div>

          <div className="flex-wrapper">
            <div className="flex-item widget">
              <div className="widget">
                <h4>Rain</h4>

              </div>
              <div className="widget">
                <h4>Visibility</h4>
              </div>
            </div>
             
            <div className="flex-item widget">
              <AirPollutionWidget />
            </div>

          </div>
          {/* {JSON.stringify(weatherData.data)} */}
        </div>

        {/* Day detail current weather */}
        <div className="detail-content">
          <CurrentWidget />
          <AdditionalWidget />
        </div>

      </div>
    </div>
  )
}

export default Dashboard;