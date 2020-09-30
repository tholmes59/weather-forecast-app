import React from 'react';


const SearchForm = (props) => {
   
        return(
            <div className="search-form">
                <form onSubmit={props.getWeatherInfo}>
                    <div className="input-container">
                        <input type='text' placeholder="City..." name='city' className='city'  />
                        <input type="text" placeholder='Country code...' name="country" className='country' /><br/>
                        <button value="Search" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
}

export default SearchForm;