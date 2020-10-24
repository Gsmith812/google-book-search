import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import Filters from '../Filters/Filters';

class SearchBar extends Component {
    render() {
        return (
            <section className='searchBar'>
                <SearchBox handleSubmit={this.props.handleSubmit} />
                <Filters 
                    handlePrintType={this.props.handlePrintType}
                    handleBookType={this.props.handleBookType}
                />
            </section>
        );
    }
}

export default SearchBar;