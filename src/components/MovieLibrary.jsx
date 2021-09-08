import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import moviesData from '../data';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: moviesData,
    };
  }

  atualizaEstado = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.filtraTeste(target, value);
  }

  filtraTeste = (target, value) => {
    this.condicaoFiltratext(target, value);
    this.condicaoFiltraSelect(target, value);
    this.condicaoFiltraBoolean(target, value);
    if (value === '' || value === false) {
      console.log('esse é o else');
      return this.setState({ movies: moviesData });
    }
  }

  condicaoFiltraBoolean = (target, value) => {
    if (target.name === 'bookmarkedOnly' && value !== false) {
      this.filtrar('bookmarked', value);
    }
  }

  condicaoFiltratext = (target, value) => {
    if (target.name === 'searchText' && value !== '') {
      this.filtroIncludes(value);
    }
  }

  condicaoFiltraSelect = (target, value) => {
    if (target.name === 'selectedGenre' && value !== '') {
      this.filtrar('genre', value);
    }
  }

    filtroIncludes = (value) => {
      const tmp = moviesData.filter(({ title, subtitle, storyline }) => (
        title.includes(value) || subtitle.includes(value) || storyline.includes(value)));
      this.setState({
        movies: tmp,
      });
    }

    filtrar = (par, value) => {
      const movieFilter = moviesData.filter((m) => m[par] === value);
      this.setState({
        movies: movieFilter,
      });
    }

    buttonAddMovie = (newMovie) => {
      moviesData.push(newMovie);
      this.setState({
        movies: moviesData,
      });
    }

    render() {
      const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
      return (
        <div>
          <h2> My awesome movie library </h2>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.atualizaEstado }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.atualizaEstado }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.atualizaEstado }
          />
          <AddMovie onClick={ this.buttonAddMovie } />
          <MovieList movies={ movies } />
        </div>
      );
    }
}

export default MovieLibrary;
