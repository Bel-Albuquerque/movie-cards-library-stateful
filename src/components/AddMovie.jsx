import React from 'react';
import PropTypes from 'prop-types';
import JuntaInputs from './Inputs/JuntaInputs';
import InputNumber from './Inputs/InputNumber';
import InputSelect from './Inputs/InputSelect';

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
    const id = 'genre-option';
    const options = [{ data: id, value: 'action', text: 'Ação' },
      { data: id, value: 'comedy', text: 'Comédia' },
      { data: id, value: 'thriller', text: 'Suspense' }];
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
        <InputSelect
          label="genre-input-label"
          labelText="Gênero"
          dataTest="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.atualizaEstado }
          dataTestOption="genre-option"
          options={ options }
        />
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
