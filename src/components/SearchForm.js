import React from 'react';


const SearchForm = (props) => {
    

        return(
            <div class="search-form">
                <form onSubmit={props.getWeatherInfo}>
                    <input type='text' placeholder="Paris" name='city' />
                    <input type="text" placeholder='Fr' name="country" />
                    <input value="Search" type="submit" />
                </form>
            </div>
        )
}

export default SearchForm;