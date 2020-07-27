import React from 'react'


const Fahrenheit = (props) => {
    let imageId = props.weather && props.weather.weather[0].icon
    let image = `http://openweathermap.org/img/wn/${imageId}@2x.png`

    return(
        <>
            {props.weather && 
                <div className="fahrenheit-celsius-container">
                    <div className="max-min-container">
                        {props.weather && <span>{(props.weather.main.temp_max * (9/5)-459.67).toFixed(0)}°F |</span>} {props.weather && <span>{(props.weather.main.temp_min  * (9/5)-459.67).toFixed(0)}°F</span>}
                    </div>
                    {props.weather && <span>{(props.weather.main.temp * (9/5)-459.67).toFixed(0)}°F </span>} 
                    {/* <img src={image} alt=""/> */}
                    {props.weather && <p>Feels Like: {(props.weather.main.feels_like * (9/5)-459.67).toFixed(0)}°F</p>}
                </div>
            }
        </>
    )
}

export default Fahrenheit;