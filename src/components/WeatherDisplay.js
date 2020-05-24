import React from 'react'


const WeatherDisplay = (props) => {

    return (
        <div>
            {console.log(props)}
            <p>{props.weather && props.weather.name + ', ' + props.weather.sys.country}</p>
            <p>{props.weather && props.weather.main.temp}</p>
            
        </div>
    )
}

export default WeatherDisplay;