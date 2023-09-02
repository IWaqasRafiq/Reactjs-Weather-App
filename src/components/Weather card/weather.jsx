import React from "react";
import "./weather.css";

const WeatherCard = ({ weatherdata }) => {
    return (
      <div className="card">
        city name: {weatherdata?.name}
        <br />
        country: {weatherdata?.sys?.country}
        <br />
        <div className="temp">{weatherdata?.main?.temp}°C</div>
        <br />
        humidity: {weatherdata?.main?.humidity}
        <br />
        wind speed: {weatherdata?.wind?.speed}
        <br />
        weather: {weatherdata?.weather[0]?.description}
      </div>
    );
  };
  
  export default WeatherCard;

