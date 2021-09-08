import React from 'react';
import PropTypes from 'prop-types';
import JuntaInputs from './JuntaInputs';
import InputNumber from './InputNumber';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  atualizaEstado= ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  objeto = () => {
    const { title, subtitle, storyline, rating, imagePath, genre } = this.state;
    const newObj = { title, subtitle, storyline, rating, imagePath, genre };
    return newObj;
  };

  buttonFunction = (event, onClick) => {
    event.preventDefault();
    const newMovie = this.objeto();
    onClick(newMovie);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <JuntaInputs
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          storyline={ storyline }
          funcao={ this.atualizaEstado }
        />
        <InputNumber
          label="rating-input-label"
          labelText="Avaliação"
          value={ rating }
          Name="rating"
          dataTest="rating-input"
          type="number"
          func={ this.atualizaEstado }
        />
        <label
          htmlFor="genre-input-label"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.atualizaEstado }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => this.buttonFunction(event, onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
