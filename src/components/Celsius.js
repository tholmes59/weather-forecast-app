import React from 'react'


const Celsius = (props) => {
   
    return(
        <>
            {props.weather && 
                <div className="fahrenheit-celsius-container">
                    <div className="max-min-container">
                        {props.weather && <span className="max-min-main">{(props.weather.main.temp_max - 273.15).toFixed(0)}°C |</span>} {props.weather && <span className="max-min-main">{(props.weather.main.temp_min  - 273.15).toFixed(0)}°C</span>}
                    </div>
                    {props.weather && <span className="temp-main">{(props.weather.main.temp - 273.15).toFixed(0)}<span className="temp-main-symbol">°C</span></span>} 
                    {props.weather && <span className="temp-main-feels-like">Feels Like: {(props.weather.main.feels_like - 273.15).toFixed(0)}°C</span>}
                </div>
            }
        </>
    )
}

export default Celsius;