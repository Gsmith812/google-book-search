import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
    render() {
        return (
            <form className='filters'>
                <label htmlFor='printType'>Print Type:</label>
                <select id='printType' name='printType'>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
                <label htmlFor='bookType'>Book Type:</label>
                <select id='bookType' name='bookType'>
                    <option value='None'>No Filter</option>
                    <option value='free-ebooks'>All Free eBooks</option>
                    <option value='paid-ebooks'>All Paid eBooks</option>
                    <option value='ebooks'>All eBooks</option>
                </select>
            </form>
        );
    }
}

export default Filters;