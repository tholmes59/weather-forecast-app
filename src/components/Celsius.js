import React from 'react'


const Celsius = (props) => {
    let imageId = props.weather && props.weather.weather[0].icon
    let image = `http://openweathermap.org/img/wn/${imageId}@2x.png`

    return(
        <div>
            {props.weather && 
                <div className="fahrenheit-celsius-container">
                    <div className="max-min-container">
                        {props.weather && <span>Max Temp: {(props.weather.main.temp_max - 273.15).toFixed(0)}°C |</span>} {props.weather && <span>Min Temp: {(props.weather.main.temp_min  - 273.15).toFixed(0)}°C</span>}
                    </div>
                    {props.weather && <span>Temp: {(props.weather.main.temp - 273.15).toFixed(0)}°C</span>} 
                    {/* <img src={image} alt=""/> */}
                    {props.weather && <p>Feels Like: {(props.weather.main.feels_like - 273.15).toFixed(0)}°C</p>}
                </div>
            }
        </div>
    )
}

export default Celsius;