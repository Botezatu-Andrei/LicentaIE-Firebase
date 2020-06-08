import React from 'react';

const SearchBox = (props) =>{
    return(
        <input type='search'
        className='search'
        placeholder={props.placehoder}
        onChange = {props.handleChange}
        />
    )
}

export default SearchBox;