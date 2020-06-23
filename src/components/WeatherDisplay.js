import React, { useState } from 'react';
import clouds from '../assets/cloudy.png'
import rain from '../assets/rain.jpg'
import clear from '../assets/sunny.jpg';
import Fahrenheit from './Fahrenheit'
import Celsius from './Celsius'

const WeatherDisplay = (props) => {

    let weatherImg;
    if((props.weather && props.weather.weather[0].main) === "Clouds"){
        weatherImg = <img src={clouds} alt="Clouds"/>
    } else if ((props.weather && props.weather.weather[0].main) === "Rain"){
        weatherImg = <img src={rain} alt="Rain"/>
    } else if ((props.weather && props.weather.weather[0].main) === "Clear"){
        weatherImg = <img src={clear} alt="Clear"/>
    }

    let imageId = props.weather && props.weather.weather[0].icon
    let image = `http://openweathermap.org/img/wn/${imageId}@2x.png`
    const degToCompass = (num) => {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    } 

    const [fahrenheit, setFahrenheit] = useState(true)
    const [celsius, setCelsius] = useState(false)

    const viewTemp = (e) => {
        e.preventDefault()
        setFahrenheit(!fahrenheit)
        setCelsius(!celsius)
    } 


    return (
        <div>
            <button onClick={viewTemp}>°F/°C</button> 
            {console.log(props)}
            <p>Location: {props.weather && props.weather.name + ', ' + props.weather.sys.country}</p>
            {fahrenheit ? <Fahrenheit /> : ''}
            {celsius ? <Celsius/> : ''}
            <p>Temp: {props.weather && (props.weather.main.temp * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.temp - 273.15).toFixed(0)}°C</p> <img src={image} alt=""/>
            <p>Feels Like: {props.weather && (props.weather.main.feels_like * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.feels_like - 273.15).toFixed(0)}°C</p>
            <p>Max Temp: {props.weather && (props.weather.main.temp_max * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.temp_max - 273.15).toFixed(0)}°C</p>
            <p>Min Temp: {props.weather && (props.weather.main.temp_min  * (9/5)-459.67).toFixed(0)}°F / {props.weather && (props.weather.main.temp_min  - 273.15).toFixed(0)}°C</p>
            <p>Humidity: {props.weather && props.weather.main.humidity}%</p>
            <p>Wind: {props.weather && (props.weather.wind.speed * 2.237).toFixed(0)} mph</p>
            <p>Direction: {props.weather && degToCompass(props.weather.wind.deg)}</p>
            <p>Gusts: {props.weather && (props.weather.wind.gust * 2.237).toFixed(0)} mph</p>
            <p>Description {props.weather && props.weather.weather[0].description}</p>
            {/* <img src={image} alt=""/> */}
            {weatherImg}
        </div>
    )
}

export default WeatherDisplay;