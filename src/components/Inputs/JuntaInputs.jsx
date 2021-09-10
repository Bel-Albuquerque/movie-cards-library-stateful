import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import TextArea from './TextArea';

class JuntaInputs extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, funcao } = this.props;
    return (
      <>
        <InputText
          label="title-input-label"
          labelText="Título"
          value={ title }
          Name="title"
          dataTest="title-input"
          func={ funcao }
        />
        <InputText
          label="subtitle-input-label"
          labelText="Subtítulo"
          value={ subtitle }
          Name="subtitle"
          dataTest="subtitle-input"
          func={ funcao }
        />
        <InputText
          label="image-input-label"
          labelText="Imagem"
          value={ imagePath }
          Name="imagePath"
          dataTest="image-input"
          func={ funcao }
        />
        <TextArea
          dataFor="storyline-input-label"
          labelText="Sinopse"
          Name="storyline"
          dataTest="storyline-input"
          funcaoOnchenge={ funcao }
          valueStoryline={ storyline }
        />
      </>
    );
  }
}

JuntaInputs.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default JuntaInputs;
