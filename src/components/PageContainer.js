import React from 'react';
import SearchForm from './SearchForm'
import WeatherDisplay from './WeatherDisplay'


const PageContainer = () => {
   
    return (
        <div>
            Contains form and display
            <SearchForm  />
            <WeatherDisplay/>
        </div>
    )
}

export default PageContainer;