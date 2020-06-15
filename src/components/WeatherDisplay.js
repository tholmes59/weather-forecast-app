import React from 'react';
import clouds from '../assets/cloudy.png'

const WeatherDisplay = (props) => {

    let weatherImg;
    if((props.weather && props.weather.weather[0].main) === "Clouds"){
        weatherImg = <img src={clouds} alt="Clouds"/>
    }

    const degToCompass = (num) => {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    } 

    return (
        <div>
            {console.log(props)}
            <p>Location: {props.weather && props.weather.name + ', ' + props.weather.sys.country}</p>
            <p>Temp: {props.weather && (props.weather.main.temp * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.temp - 273.15).toFixed(0)}°C</p>
            <p>Feels Like: {props.weather && (props.weather.main.feels_like * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.feels_like - 273.15).toFixed(0)}°C</p>
            <p>Humidity: {props.weather && props.weather.main.humidity}%</p>
            <p>Max Temp: {props.weather && (props.weather.main.temp_max * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.temp_max - 273.15).toFixed(0)}°C</p>
            <p>Min Temp: {props.weather && (props.weather.main.temp_min  * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.temp_min  - 273.15).toFixed(0)}°C</p>
            <p>Wind: {props.weather && (props.weather.wind.speed * 2.237).toFixed(0)} mph</p>
            <p>Direction: {props.weather && degToCompass(props.weather.wind.deg)}</p>
            <p>Gusts: {props.weather && (props.weather.wind.gust * 2.237).toFixed(0)} mph</p>
            <p>Description {props.weather && props.weather.weather[0].description}</p>
            {weatherImg}
        </div>
    )
}

export default WeatherDisplay;