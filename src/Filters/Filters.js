import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
    render() {
        return (
            <form className='filters'>
                <label htmlFor='printType'>Print Type:</label>
                <select id='printType' name='printType' onChange={e => this.props.handlePrintType(e.target.value)}>
                    <option value='ALL'>All</option>
                    <option value='BOOK'>Books</option>
                    <option value='MAGAZINE'>Magazines</option>
                </select>
                <label htmlFor='bookType'>Book Type:</label>
                <select id='bookType' name='bookType' onChange={e => this.props.handleBookType(e.target.value)}>
                    <option value='ALL'>No Filter</option>
                    <option value='Free-eBooks'>All Free eBooks</option>
                    <option value='Paid-eBooks'>All Paid eBooks</option>
                    <option value='eBooks'>All eBooks</option>
                </select>
            </form>
        );
    }
}

export default Filters;