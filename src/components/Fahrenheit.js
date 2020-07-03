import React from 'react'


const Fahrenheit = (props) => {
    let imageId = props.weather && props.weather.weather[0].icon
    let image = `http://openweathermap.org/img/wn/${imageId}@2x.png`

    return(
        <div>
            <p>Temp: {props.weather && (props.weather.main.temp * (9/5)-459.67).toFixed(0)}°F</p> <img src={image} alt=""/>
            <p>Feels Like: {props.weather && (props.weather.main.feels_like * (9/5)-459.67).toFixed(0)}°F</p>
            <p>Max Temp: {props.weather && (props.weather.main.temp_max * (9/5)-459.67).toFixed(0)}°F</p>
            <p>Min Temp: {props.weather && (props.weather.main.temp_min  * (9/5)-459.67).toFixed(0)}°F</p>
        </div>
    )
}

export default Fahrenheit;