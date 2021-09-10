import React from 'react';
import PropTypes from 'prop-types';
import InputText from './Inputs/InputText';
import InputSelect from './Inputs/InputSelect';

class SearchBar extends React.Component {
  render() {
    const id = 'select-option';

    const options = [{ data: id, value: '', text: 'Todos' },
      { data: id, value: 'action', text: 'Ação' },
      { data: id, value: 'comedy', text: 'Comédia' },
      { data: id, value: 'thriller', text: 'Suspense' }];

    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <InputText
          label="text-input-label"
          labelText="Inclui o texto:"
          value={ searchText }
          Name="searchText"
          dataTest="text-input"
          func={ onSearchTextChange }
        />
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <InputSelect
          label="select-input-label"
          labelText="Filtrar por gênero"
          dataTest="select-input"
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          dataTestOption="select-option"
          options={ options }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
