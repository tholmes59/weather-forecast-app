import React, { useState} from 'react';
import SearchForm from './SearchForm'
import WeatherDisplay from './WeatherDisplay'



const PageContainer = () => {
   
    const [weather, setWeather] = useState([])
    const API_KEY = process.env.REACT_APP_APIKEY;

    async function fetchWeatherData(e) {
        let city = e.target.elements.city.value;
        let country = e.target.elements.country.value;
        e.preventDefault()
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(data => data)
        setWeather({
            data: weatherData
        })
    }

    return (
        <div>
            <SearchForm  getWeatherInfo={fetchWeatherData}/>
            <WeatherDisplay weather={weather.data}/>
        </div>
    )
}

export default PageContainer;