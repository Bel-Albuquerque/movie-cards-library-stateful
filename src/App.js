import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />

    </div>
  );
}

export default App;
