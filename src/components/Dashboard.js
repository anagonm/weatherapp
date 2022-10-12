import React, { useState, useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import * as WeatherThunkActions from "../reducers/weather";

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
    <div className="App">
      <input type='text' value={city} onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={searchByCity}>Search</button>
      <div id="result"></div>
      <>Weather app {weatherData.loading && '...'}</>

      <div className="main-wrapper">
        <div>
          {JSON.stringify(weatherData.data)}
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;