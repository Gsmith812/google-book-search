import React, { Component } from 'react';
import './BooksList.css';
import BookItem from '../BookItem/BookItem';

class BooksList extends Component {
    render() {
        const books = this.props.bookList.filter(book => (this.props.filter === 'ALL') || (book.volumeInfo.printType === this.props.filter)).filter(book => (this.props.bookType === 'ALL') || (this.props.bookType === 'eBooks' && book.saleInfo.isEbook === true) || (this.props.bookType === 'Paid-eBooks' && book.saleInfo.isEbook === true && book.saleInfo.saleability === 'FOR_SALE') || (this.props.bookType === 'Free-eBooks' && book.saleInfo.isEbook === true && book.saleInfo.saleability === 'NOT_FOR_SALE')).map((book, i) => 
            <BookItem bookInfo={book} key={i}/>
        )
        return (
            <section className='booksList'>
                {books}
            </section>
        );
    }
}

export default BooksList;