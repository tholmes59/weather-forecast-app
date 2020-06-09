import React from 'react';


const WeatherDisplay = (props) => {


    return (
        <div>
            {console.log(props)}
            <p>Location: {props.weather && props.weather.name + ', ' + props.weather.sys.country}</p>
            <p>Temp: {props.weather && (props.weather.main.temp * (9/5)-459.67).toFixed(0)}°F/{props.weather && (props.weather.main.temp - 273.15).toFixed(0)}°C</p>
            <p>Feels Like: {props.weather && (props.weather.main.feels_like * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.feels_like - 273.15).toFixed(0)}°C</p>
            <p>Humidity: {props.weather && props.weather.main.humidity}</p>
            <p>Max Temp: {props.weather && (props.weather.main.temp_max * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.temp_max - 273.15).toFixed(0)}°C</p>
            <p>Min Temp: {props.weather && (props.weather.main.temp_min  * (9/5)-459.67).toFixed(0)}°F</p>
            <p>Wind: {props.weather && props.weather.wind.speed}</p>
            <p>Gusts: {props.weather && props.weather.wind.gust}</p>
            <p>Description {props.weather && props.weather.weather[0].description}</p>
        </div>
    )
}

export default WeatherDisplay;