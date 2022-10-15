import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { WeatherContext } from './weatherContext';
import { useDispatch, useSelector } from 'react-redux';
import * as WeatherThunkActions from "../thunks/weather";
import * as AirPollutionThunkActions from "../thunks/airPollution";
import * as ForecastThunkActions from "../thunks/forecast";
import { getBrowserGeoPosition, getLocalStorageItem, getURLParam, placeLinkIntoClipBoard, savePosition, setLocalStorageItem } from '../utils';
import * as WeatherActions from '../reducers/weather';
import * as Constants from '../utils/constants';

export const WeatherProvider = ({ children }) => {
  // Redux state management
  const dispatch = useDispatch();
  const weatherData       = useSelector(state => state.weather);
  const airPollutionData  = useSelector(state => state.airPollution);
  const forecast          = useSelector(state => state.forecast)

  // Component states
  const [error, setError] = useState(undefined);
  const [info, setInfo]   = useState(undefined);
  const [modal, setModal] = useState(true);
  const [city, setCity]   = useState('');
  const [lat, setLat]     = useState(undefined);
  const [lon, setLon]     = useState(undefined);

  const hideModal = () => {
    setModal(prevState => !prevState);
    setLocalStorageItem(Constants.LOCAL_STORAGE_KEY_WELCOME_MODAL, true);
  }

  const hideError = () => {
    dispatch(WeatherActions.setError(false));
  }

  const getGeoPositon = async () => {
    // A friend is sharing the link
    if (getURLParam(Constants.URL_PARAM_LAT) && getURLParam(Constants.URL_PARAM_LON)) {
      setLat(getURLParam(Constants.URL_PARAM_LAT));
      setLon(getURLParam(Constants.URL_PARAM_LON));
      return;
    }

    const positionLocalStorage = getLocalStorageItem(Constants.LOCAL_STORAGE_KEY_GPS_POSITION);
    if (positionLocalStorage !== null) {
      setLat(positionLocalStorage.lat);
      setLon(positionLocalStorage.lon);
    }

    try {
      const { latitude, longitude } = await getBrowserGeoPosition();
      if (!positionLocalStorage) {
        setLat(latitude);
        setLon(longitude);
        savePosition(latitude, longitude);
      }
    } catch(e) {
      setError(e);
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

  const copyShareUrl = () => {
    placeLinkIntoClipBoard().then(() => { 
      setInfo(Constants.MESSAGE_URL_COPIED);
    });
  }

  const hideInfo = () => {
    setInfo(undefined);
  }

  const contextValue = {
    dispatch,
    error, hideError,
    city, setCity,
    lat, setLat,
    lon, setLon,
    modal, hideModal,
    info, hideInfo,
    weatherData,
    airPollutionData,
    forecast,
    searchByCity,
    copyShareUrl
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