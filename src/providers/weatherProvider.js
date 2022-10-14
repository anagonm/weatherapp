import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { WeatherContext } from './weatherContext';
import { useDispatch, useSelector } from 'react-redux';
import * as WeatherThunkActions from "../reducers/weather";
import * as AirPollutionThunkActions from "../reducers/airPollution";
import * as ForecastThunkActions from "../reducers/forecast";
import { getPositionFromLocalStorage, savePosition } from '../utils';

export const WeatherProvider = ({ children }) => {
  // Redux state management
  const dispatch = useDispatch();
  const weatherData       = useSelector(state => state.weather);
  const airPollutionData  = useSelector(state => state.airPollution);
  const forecast          = useSelector(state => state.forecast)

  // Component states
  const [error, setError] = useState(undefined)
  const [city, setCity]   = useState('');
  const [lat, setLat]     = useState(undefined);
  const [lon, setLon]     = useState(undefined);

  const getGeoPositon = () => {

    const positionLocalStorage = getPositionFromLocalStorage();
    if (positionLocalStorage !== null) {
      setLat(positionLocalStorage.lat);
      setLon(positionLocalStorage.lon);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        if (!positionLocalStorage) {
          setLat(latitude);
          setLon(longitude);
          savePosition(latitude, longitude);
        }
      });
    } else {
      setError("It seems like your browser does not support HTML5 geolocation. Please install a different browser and enable javascript");
    }
  }

  useEffect(() => {
    getGeoPositon();
  }, []);

  useEffect(() => {
    if (lat && lon) {
      dispatch(WeatherThunkActions.getWeatherByLatLon({lat, lon}));
      dispatch(AirPollutionThunkActions.getAirPollutionByLatLon({lat, lon}));
      dispatch(ForecastThunkActions.getForecastByLatLon({lat, lon}));
    }
  }, [dispatch, lat, lon]);

  const searchByCity = () => {
    if (city && city !== '') {
      dispatch(WeatherThunkActions.getWeatherByCity({city}));
      dispatch(ForecastThunkActions.getForecastByCity({city}));
    }
  }

  const contextValue = {
    error,
    setError,
    city,
    setCity,
    lat,
    setLat,
    lon,
    setLon,
    weatherData,
    dispatch,
    searchByCity,
    airPollutionData,
    forecast
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}

WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired
}