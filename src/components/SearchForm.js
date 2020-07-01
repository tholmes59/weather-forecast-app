import React from 'react';


const SearchForm = (props) => {
   
        return(
            <div className="search-form">
                <form onSubmit={props.getWeatherInfo}>
                    <input type='text' placeholder="Enter city..." name='city' className='city'  required/>
                    <input type="text" placeholder='Enter country...' name="country" className='country' required/><br/>
                    <button value="Search" type="submit">Search</button>
                </form>
            </div>
        )
}

export default SearchForm;