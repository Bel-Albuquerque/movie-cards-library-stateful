import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  atualizaEstado = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
    this.filtraTeste(target, value);
  }

  filtraTeste = (target, value) => {
    const { movies } = this.props;
    this.condicaoFiltratext(target, value);
    this.condicaoFiltraSelect(target, value);
    this.condicaoFiltraBoolean(target, value);
    if (value === '' || value === false) {
      console.log('esse é o else');
      return this.setState({ movies });
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
      const { movies } = this.state;
      const tmp = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(value) || subtitle.includes(value) || storyline.includes(value)));
      this.setState({
        movies: tmp,
      });
    }

    filtrar = (par, value) => {
      const { movies } = this.state;
      const movieFilter = movies.filter((m) => m[par] === value);
      this.setState({
        movies: movieFilter,
      });
    }

    buttonAddMovie = (newMovie) => {
      const { movies } = this.state;
      const array = [...movies, newMovie];
      this.setState({ movies: array });
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

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
