import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import BooksList from './BooksList/BooksList';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <main>
        <SearchBar/>
        <BooksList/>
      </main>
      
    </div>
  );
}

export default App;
