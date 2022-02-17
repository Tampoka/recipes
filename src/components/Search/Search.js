import React, {useState} from 'react';
import {useInput} from '../../customHooks/useInput';

const Search = ({placeholder='',onSearch=f=>f}) => {
    const [searchProps, resetSearch] = useInput('')
    const onSearchHandler=()=>{
        onSearch(searchProps.value)
        resetSearch()
    }
    return (
        <>
            <input {...searchProps}
                type="text"
                   placeholder={placeholder}
                   required/>
            <button onClick={onSearchHandler}>Search</button>
        </>
    );
};

export default Search;