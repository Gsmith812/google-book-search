import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import BooksList from './BooksList/BooksList';



class App extends Component {
  
  state = {
    books: [],
    filters: 'ALL',
    bookType: 'ALL'
  };

  printTypeChanged(filter) {
    this.setState({
      filters: filter
    })
  }

  bookTypeChanged(filter) {
    this.setState({
      bookType: filter
    })
  }

  searchTermSubmitted(e) {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&key=AIzaSyAwKYvRt47b2FMY1_1jcprLmmypek-LmRM`
    fetch(url)
      .then(res => res.ok ? res.json() : Promise.reject({err: res.status}))
      .then(data => this.setState({
        books: data.items
      }))
      .catch(err => alert('Something went wrong, please try again later.', err));
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <SearchBar 
            handleSubmit={e => this.searchTermSubmitted(e)}
            handlePrintType={filter => this.printTypeChanged(filter)}
            handleBookType={filter => this.bookTypeChanged(filter)}
            />
          <BooksList 
            bookList={this.state.books} 
            filter={this.state.filters}
            bookType={this.state.bookType}  
          />
        </main>
        
      </div>
    );
  }
}

export default App;
