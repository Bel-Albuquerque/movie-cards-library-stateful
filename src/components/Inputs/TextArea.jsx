import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { dataFor,
      labelText,
      Name,
      dataTest,
      funcaoOnchenge,
      valueStoryline } = this.props;

    return (
      <label
        data-testid={ dataFor }
        htmlFor={ dataFor }
      >
        {labelText}
        <textarea
          name={ Name }
          data-testid={ dataTest }
          onChange={ funcaoOnchenge }
          value={ valueStoryline }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  dataFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  funcaoOnchenge: PropTypes.func.isRequired,
  valueStoryline: PropTypes.string.isRequired,
};

export default TextArea;
