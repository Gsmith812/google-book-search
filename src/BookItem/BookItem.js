import React, { Component } from 'react';
import './BookItem.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class BookItem extends Component {
    render() {
        const { title, authors, description, imageLinks } = this.props.bookInfo.volumeInfo
        const { saleInfo } = this.props.bookInfo;
        let price = 0;
        if(saleInfo.saleability === 'NOT_FOR_SALE') {
            price = 'None';
        }
        else {
            price = USCurrencyFormat.format(saleInfo.retailPrice.amount);
        }
        return (
            <div className='bookItem'>
                <h2>{title}</h2>
                <div className='container'>
                    <div className='thumbImg'>
                        <img src={imageLinks.thumbnail} alt={title} />
                    </div>
                    <div className='bookInfo'>
                        <p>
                            Author: {authors} <br />
                            Price: {price}
                        </p>
                        <p>{description}</p>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default BookItem;