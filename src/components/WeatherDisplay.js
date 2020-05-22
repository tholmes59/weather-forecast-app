import React from 'react'


const WeatherDisplay = (props) => {

    return (
        <div>
            
            <p>{props.city && props.country && props.city + ', ' + props.country}</p>
            
        </div>
    )
}

export default WeatherDisplay;