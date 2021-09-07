import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
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
          type="number"
          onChange={ func }
          value={ value }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  label: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default InputNumber;
