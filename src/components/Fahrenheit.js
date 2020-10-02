import React from 'react'


const Fahrenheit = (props) => {

    return (
      <>
        {props.weather && (
          <div className="fahrenheit-celsius-container">
            <div className="max-min-container">
              {props.weather && (
                <span className="max-min-main">
                  {(props.weather.main.temp_max * (9 / 5) - 459.67).toFixed(0)}
                  °F |
                </span>
              )}{" "}
              {props.weather && (
                <span className="max-min-main">
                  {(props.weather.main.temp_min * (9 / 5) - 459.67).toFixed(0)}
                  °F
                </span>
              )}
            </div>
            {props.weather && (
              <span className="temp-main">
                {(props.weather.main.temp * (9 / 5) - 459.67).toFixed(0)}
                <span className="temp-main-symbol">°F</span>{" "}
              </span>
            )}
            {props.weather && (
              <span className="temp-main-feels-like">
                Feels Like:{" "}
                {(props.weather.main.feels_like * (9 / 5) - 459.67).toFixed(0)}
                °F
              </span>
            )}
          </div>
        )}
      </>
    );
}

export default Fahrenheit;