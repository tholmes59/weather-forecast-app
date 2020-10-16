import React, { useState } from 'react';
import Fahrenheit from './Fahrenheit';
import Celsius from './Celsius';
import moment from 'moment';

const WeatherDisplay = (props) => {
  let now = new Date();
  let timezone = props.weather && props.weather.timezone * 1000;
  let utc = new Date(
    now.getTime() + timezone + now.getTimezoneOffset() * 60000
  );

  let imageId = props.weather && props.weather.weather.map(x => x.icon);
  let image = `http://openweathermap.org/img/wn/${imageId}@2x.png`;
  // const degToCompass = (num) => {
  //     var val = Math.floor((num / 22.5) + 0.5);
  //     var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  //     return arr[(val % 16)];
  // }

  const degToCompass = (angle) => {
    const directions = [
      "↑ N",
      "↗ NE",
      "→ E",
      "↘ SE",
      "↓ S",
      "↙ SW",
      "← W",
      "↖ NW",
    ];
    return directions[Math.round(angle / 45) % 8];
  };

  const [fahrenheit, setFahrenheit] = useState(true);
  const [celsius, setCelsius] = useState(false);

  const viewTemp = (e) => {
    e.preventDefault();
    setFahrenheit(!fahrenheit);
    setCelsius(!celsius);

    let elm = document.getElementById("temp");
    if (elm.innerHTML === "view in °C") {
      elm.innerHTML = "view in °F";
    } else {
      elm.innerHTML = "view in °C";
    }
  };

  return (
    <div>
      
      <div className="sun-container"></div>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="line-4"></div>
      <div className="line-5"></div>
      <div className="line-6"></div>
      
      {props.weather && (
        <p>
          {props.weather &&
            props.weather.name + ", " + props.weather.sys.country}{" "}
          - Local Time - {moment(utc).format("h:mm a, MMMM Do YYYY")}
        </p>
      )}

      <div className="temp-button-container">
        {props.weather && (
          <button onClick={viewTemp} className="temp-button">
            <span id="temp">view in °C</span>
          </button>
        )}
      </div>
      <div className="weather-display-container">
        {console.log(props)}

        {fahrenheit ? <Fahrenheit weather={props.weather} /> : ""}
        {celsius ? <Celsius weather={props.weather} /> : ""}
        {props.weather && (
          <div className="wind-container">
            {props.weather && (
              <span>Humidity: {props.weather.main.humidity}%</span>
            )}
            <div className="wind-speed-direction-container">
              {props.weather && (
                <span>
                  Wind: {(props.weather.wind.speed * 2.237).toFixed(0)} mph
                </span>
              )}{" "}
              {props.weather && (
                <span>{degToCompass(props.weather.wind.deg)}</span>
              )}
            </div>
            {props.weather && (
              <span>
                Gusts:{" "}
                {props.weather.wind.gust
                  ? (props.weather.wind.gust * 2.237).toFixed(0) + " mph"
                  : "Gusts not available"}{" "}
              </span>
            )}
            {props.weather && (
              <span>
                Sunrise:{" "}
                {moment(
                  props.weather.sys.sunrise * 1000 +
                    timezone +
                    new Date().getTimezoneOffset() * 60000
                ).format("LT")}{" "}
              </span>
            )}
            {props.weather && (
              <span>
                Sunset:{" "}
                {moment(
                  props.weather.sys.sunset * 1000 +
                    timezone +
                    new Date().getTimezoneOffset() * 60000
                ).format("LT")}{" "}
              </span>
            )}
          </div>
        )}
        {props.weather && (
          <div className="description-container">
            <img src={image} alt="" />
            {props.weather && <p>{props.weather.weather.map(x => x.description)}</p>}
          </div>
        )}
        {props.error && <p>{props.error}</p>}
      </div>
    </div>
  );
}

export default WeatherDisplay;