import React, { useState } from 'react';
// import clouds from '../assets/cloudy.png'
// import rain from '../assets/rain.jpg'
// import clear from '../assets/sunny.jpg';
import Fahrenheit from './Fahrenheit'
import Celsius from './Celsius'
import moment from 'moment';

const WeatherDisplay = (props) => {

    // let weatherImg;
    // if((props.weather && props.weather.weather[0].main) === "Clouds"){
    //     weatherImg = <img src={clouds} alt="Clouds"/>
    // } else if ((props.weather && props.weather.weather[0].main) === "Rain"){
    //     weatherImg = <img src={rain} alt="Rain"/>
    // } else if ((props.weather && props.weather.weather[0].main) === "Clear"){
    //     weatherImg = <img src={clear} alt="Clear"/>
    // }

    let imageId = props.weather && props.weather.weather[0].icon
    let image = `http://openweathermap.org/img/wn/${imageId}@2x.png`
    // const degToCompass = (num) => {
    //     var val = Math.floor((num / 22.5) + 0.5);
    //     var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    //     return arr[(val % 16)];
    // } 

    const degToCompass = (angle) => {
        const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
        return directions[Math.round(angle / 45) % 8];
    }

    const [fahrenheit, setFahrenheit] = useState(true)
    const [celsius, setCelsius] = useState(false)

    const viewTemp = (e) => {
        e.preventDefault()
        setFahrenheit(!fahrenheit)
        setCelsius(!celsius)

        let elm = document.getElementById("temp")
        if(elm.innerHTML === "°C"){
            elm.innerHTML = "°F"
        } else {
            elm.innerHTML = "°C"
        }
    } 

    return (
        <div>
            {props.weather && <p>Location: {props.weather && props.weather.name + ', ' + props.weather.sys.country} {moment().format('LLL')}</p>}
        
            <div className="temp-button-container">
                {props.weather && <button onClick={viewTemp} className="temp-button"><span id="temp">°C</span></button> }
            </div>
        <div className="weather-display-container">
            {console.log(props)}
            
            {fahrenheit ? <Fahrenheit weather={props.weather}/> : ''}
            {celsius ? <Celsius weather={props.weather}/> : ''}
            {props.weather && 
                <div className="wind-container">
                    {props.weather && <p>Humidity: {props.weather.main.humidity}%</p>}
                    {props.weather && <p>Wind: {(props.weather.wind.speed * 2.237).toFixed(0)} mph</p>} 
                    {props.weather && <p>Direction: {degToCompass(props.weather.wind.deg)}</p>}
                    {props.weather && <p>Gusts: {props.weather.wind.gust ? (props.weather.wind.gust * 2.237).toFixed(0) + ' mph'  : "Gusts not available"} </p>}    
                </div>
            }
            {props.weather && 
                <div className="description-container">
                    <img src={image} alt=""/>
                    {props.weather && <p>Description: {props.weather.weather[0].description}</p>}    
                </div>
            }
            {/* {weatherImg} */}
            {props.error && <p>{props.error}</p>}
        </div>
        </div>
    )
}

export default WeatherDisplay;