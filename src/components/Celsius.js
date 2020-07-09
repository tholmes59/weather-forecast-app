import React from 'react'


const Celsius = (props) => {
    let imageId = props.weather && props.weather.weather[0].icon
    let image = `http://openweathermap.org/img/wn/${imageId}@2x.png`

    return(
        <div className="fahrenheit-celsius-container">
            {props.weather && <p>Temp: {(props.weather.main.temp - 273.15).toFixed(0)}°C</p>} <img src={image} alt=""/>
            {props.weather && <p>Feels Like: {(props.weather.main.feels_like - 273.15).toFixed(0)}°C</p>}
            {props.weather && <p>Max Temp: {(props.weather.main.temp_max - 273.15).toFixed(0)}°C</p>}
            {props.weather && <p>Min Temp: {(props.weather.main.temp_min  - 273.15).toFixed(0)}°C</p>}
        </div>
    )
}

export default Celsius;