import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { WeatherContext } from './weatherContext';
import { useDispatch, useSelector } from 'react-redux';
import * as WeatherThunkActions from "../thunks/weather";
import * as AirPollutionThunkActions from "../thunks/airPollution";
import * as ForecastThunkActions from "../thunks/forecast";
import { getLocalStorageItem, savePosition, setLocalStorageItem } from '../utils';
import * as WeatherActions from '../reducers/weather';

export const WeatherProvider = ({ children }) => {
  // Redux state management
  const dispatch = useDispatch();
  const weatherData       = useSelector(state => state.weather);
  const airPollutionData  = useSelector(state => state.airPollution);
  const forecast          = useSelector(state => state.forecast)

  // Component states
  const [error, setError] = useState(undefined);
  const [info, setInfo] = useState(undefined);
  const [modal, setModal] = useState(true);
  const [city, setCity]   = useState('');
  const [lat, setLat]     = useState(undefined);
  const [lon, setLon]     = useState(undefined);

  const [steps, setSteps] = useState([
    {
      target: '.my-first-step',
      content: 'This is my awesome feature!',
    },
    {
      target: '.my-other-step',
      content: 'This another awesome feature!',
    },
  ])

  const hideModal = () => {
    setModal(prevState => !prevState);
    setLocalStorageItem("welcomeModal", true);
  }

  const hideError = () => {
    dispatch(WeatherActions.setError(false));
  }

  const getURLParam = (param) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }

  const resetApp = () => {
    window.location.href = window.location.href.split("?")[0];
    setLocalStorageItem("gps_position", null);
  }

  const getGeoPositon = () => {
    // A friend is sharing the link
    if (getURLParam('lat') && getURLParam('lon')) {
      setLat(getURLParam('lat'));
      setLon(getURLParam('lon'));
      return;
    }

    const positionLocalStorage = getLocalStorageItem("gps_position");
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

  const generateLink = () => {
    const location = getLocalStorageItem("gps_position");
    const { lat, lon } = location;
    const text = `${window.location.href}?lat=${lat}&lon=${lon}`;
    navigator.clipboard.writeText(text).then(
      () => { 
        console.log('@@@@ click to copy');
        setInfo("Url copied to clipboard");
      }
    );
  }

  const hideInfo = () => {
    setInfo(undefined);
  }

  const contextValue = {
    error,
    hideError,
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
    forecast,
    generateLink,
    resetApp,
    steps,
    modal,
    hideModal,
    info,
    hideInfo
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