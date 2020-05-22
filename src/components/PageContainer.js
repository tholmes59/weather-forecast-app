import React, { useState} from 'react';
import SearchForm from './SearchForm'
import WeatherDisplay from './WeatherDisplay'



const PageContainer = () => {
   
    const [weather, setWeather] = useState([])
    const API_KEY = process.env.REACT_APP_APIKEY;

    async function fetchWeatherData(e) {
        e.preventDefault()
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(data => data)
        setWeather({
            data: weatherData
        })
    }

    return (
        <div>
            Contains form and display
            <SearchForm  getWeatherInfo={fetchWeatherData}/>
           
        </div>
    )
}

export default PageContainer;