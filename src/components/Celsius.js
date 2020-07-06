import React from 'react'


const Celsius = (props) => {
    let imageId = props.weather && props.weather.weather[0].icon
    let image = `http://openweathermap.org/img/wn/${imageId}@2x.png`

    return(
        <div>
            {props.weather && <p>Temp: {(props.weather.main.temp - 273.15).toFixed(0)}°C</p>} <img src={image} alt=""/>
            <p>Feels Like: {props.weather && (props.weather.main.feels_like - 273.15).toFixed(0)}°C</p>
            <p>Max Temp: {props.weather && (props.weather.main.temp_max - 273.15).toFixed(0)}°C</p>
            <p>Min Temp: {props.weather && (props.weather.main.temp_min  - 273.15).toFixed(0)}°C</p>
        </div>
    )
}

export default Celsius;