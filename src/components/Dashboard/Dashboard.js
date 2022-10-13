import React, { useState, useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.css';
import * as WeatherThunkActions from "../../reducers/weather";
import DailyWidget from "../widgets/DailyWidget";

const Dashboard = (props) => {
  const [error, setError] = useState(undefined)
  const [city, setCity] = useState(undefined);
  const [lat, setLat] = useState(undefined);
  const [lon, setLon] = useState(undefined);
  const weatherData = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const showPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    } else {
      setError("It seems like your browser does not support HTML5 geolocation. Please install a different browser and enable javascript");
    }
  }

  useLayoutEffect(() => {
    showPosition();
  })

  useEffect(() => {
    if (lat && lon) {
      dispatch(WeatherThunkActions.getWeatherByLatLon({lat, lon}));
    }
  }, [lat, lon]);

  const searchByCity = () => {
    if (city && city !== '') {
      dispatch(WeatherThunkActions.getWeatherByCity({city}));
    }
  }

  return (
    <div className="main-container">
      <div className="main-title">
        <div className="search">
          <input type='text' placeholder="Search by city..." value={city} onChange={(e) => setCity(e.target.value)}></input>
          <button onClick={searchByCity}>Search</button>
        </div>
        
        {/* <>Weather app {weatherData.loading && '...'}</> */}
        <div className="title">
          <h2>Tuesday, October 14</h2>
          <p>07:46PM</p>
        </div>
      </div>
      
      <div className="main-wrapper">
        {/* Weekly and other data */}
        <div className="main-content">
          <div className="daily-widget">
            <div className="widget daily-detail current">
              <img className="icon" src="https://openweathermap.org/img/wn/10d@2x.png" alt=""/>
              <p>28º</p>
              <p>Clouds</p>
            </div>
            <div className="widget daily-detail">
              <img className="icon" src="https://openweathermap.org/img/wn/10d@2x.png" alt=""/>
              <p>28º</p>
              <p>Clouds</p>
            </div>
            <div className="widget daily-detail">
              <img className="icon" src="https://openweathermap.org/img/wn/04d@2x.png" alt=""/>
              <p>28º</p>
              <p>Clouds</p>
            </div>
            <div className="widget daily-detail">
              <img className="icon" src="https://openweathermap.org/img/wn/10d@2x.png" alt=""/>
              <p>28º</p>
              <p>Clouds</p>
            </div>
            <div className="widget daily-detail">
              <img className="icon" src="https://openweathermap.org/img/wn/04d@2x.png" alt=""/>
              <p>28º</p>
              <p>Clouds</p>
            </div>
            <div className="widget daily-detail">
              <img className="icon" src="https://openweathermap.org/img/wn/04d@2x.png" alt=""/>
              <p>28º</p>
              <p>Clouds</p>
            </div>
            <div className="widget daily-detail">
              <img className="icon" src="https://openweathermap.org/img/wn/10d@2x.png" alt=""/>
              <p>28º</p>
              <p>Clouds</p>
            </div>
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
              <h4>Air Pollution</h4>
              <p>Good Quality</p>
              {/* (main.aqi Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.) */}
              <div className="flex-wrapper">
                <div className="flex-item">
                  <p><span>CO</span> | <span>1018</span></p>
                  <p><span>O3</span> | <span>75.102</span></p>
                  <p><span>CO</span> | <span>1018</span></p>
                  <p><span>PM10</span> | <span>203.609</span></p>
                </div>
                <div className="flex-item">
                  <p><span>CO</span> | <span>1018</span></p>
                  <p><span>CO</span> | <span>1018</span></p>
                  <p><span>O3</span> | <span>75.102</span></p>
                  <p><span>CO</span> | <span>1018</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* {JSON.stringify(weatherData.data)} */}
        </div>

        {/* Day detail current weather */}
        <div className="detail-content">
          <div className="widget weather-detail">
            <img className="icon" src="https://openweathermap.org/img/wn/10d@2x.png" alt=""/>
            <p>Miami, FL</p>
            <h3>28º</h3>
            <p>Clouds</p>
          </div>
          <div className="weather-extra-wrapper">
            <div className="widget weather-extra bg-extra1">
                <p><span>Pressure</span> | <span>1018</span></p>
                <p><span>Humidity</span> | <span>77%</span></p>
            </div>
            <div className="widget weather-extra bg-extra2">
                <p><span>Wind sped</span> | <span>1.54m/h</span></p>
                <p><span>Wind deg</span> | <span>230</span></p>
            </div>
            <div className="widget weather-extra bg-extra3">
                <p><span>feels_like</span> | <span>288.74</span></p>
                <p><span>feels_like</span> | <span>288.74</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;