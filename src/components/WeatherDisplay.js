import React from 'react'


const WeatherDisplay = (props) => {

    return (
        <div>
            {console.log(props)}
            <p>{props.weather && props.weather.name + ', ' + props.weather.sys.country}</p>
            
        </div>
    )
}

export default WeatherDisplay;