import React from "react";
import StarIcon from "../assets/star.png"
import MapImg from "../assets/map.jpeg"

const Modal = ({ hideModal }) => {
  return (
    <div className="modal-container" data-testid="modal-container">
      <div className="modal-wrapper">
        <div className="modal-header">
          <h2>WeatherApp</h2>
          <p>Version 1.0.0</p>
        </div>

        <div className="modal-content">
          <div className="modal-body">
            <h3>App Features</h3>
            <ul>
              <li>Get real time weather with Geolocation.</li>
              <li>Search weather by city.</li>
              <li>Forecast 5 days / 3 hours.</li>
              <li>Air Pollution from Geolocation.</li>
              <li>Share current location weather with friends.</li>
            </ul>
          </div>
          <img src={MapImg} alt="map"/>
        </div>

        <div className="modal-enphasis">
          <img src={StarIcon} alt="star icon" />
          <p>Hope you enjoy this version.</p>
        </div>

        <div className="modal-button">
          <button onClick={hideModal} data-testid="hide-modal-btn">Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;