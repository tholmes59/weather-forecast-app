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

    // let imageId = props.weather && props.weather.weather[0].icon
    // let image = `http://openweathermap.org/img/wn/${imageId}@2x.png`
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
            {console.log(props)}
            <p>Location: {props.weather && props.weather.name + ', ' + props.weather.sys.country}</p>
            <button onClick={viewTemp}>°F/°C</button> 
            {fahrenheit ? <Fahrenheit weather={props.weather}/> : ''}
            {celsius ? <Celsius weather={props.weather}/> : ''}
           
            {props.weather &&  <p>Humidity: {props.weather.main.humidity}%</p>}
            {props.weather && <p>Wind: {(props.weather.wind.speed * 2.237).toFixed(0)} mph</p>} 
            <p>Direction: {props.weather && degToCompass(props.weather.wind.deg)}</p>
            <p>Gusts: {props.weather && (props.weather.wind.gust * 2.237).toFixed(0)} mph</p>
            <p>Description {props.weather && props.weather.weather[0].description}</p>
            {/* <img src={image} alt=""/> */}
            {weatherImg}
        </div>
    )
}

export default WeatherDisplay;