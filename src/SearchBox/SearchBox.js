import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        return (
            <form className='searchBox'>
                <label htmlFor='search'>Search:</label>
                <input
                    type='text'
                    id='search'
                    name='search'
                    required 
                />
                <button
                    type='submit'
                    id='submitSearch'
                    name='submitSearch'
                >
                    Search
                </button>
            </form>
        );
    }
}

export default SearchBox;