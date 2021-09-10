import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { label, labelText, value, Name, dataTest, func } = this.props;
    return (
      <label
        htmlFor={ label }
        data-testid={ label }
      >
        {labelText}
        <input
          name={ Name }
          data-testid={ dataTest }
          type="text"
          onChange={ func }
          value={ value }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;
