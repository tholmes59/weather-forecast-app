import React from 'react'


const WeatherDisplay = (props) => {


    return (
        <div>
            {console.log(props)}
            <p>Location: {props.weather && props.weather.name + ', ' + props.weather.sys.country}</p>
            <p>Temp: {props.weather && props.weather.main.temp}</p>
            <p>Feels Like: {props.weather && props.weather.main.feels_like}</p>
            <p>Humidity: {props.weather && props.weather.main.humidity}</p>
            <p>Max Temp: {props.weather && props.weather.main.temp_max}</p>
            
        </div>
    )
}

export default WeatherDisplay;