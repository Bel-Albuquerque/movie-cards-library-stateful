import React from 'react';
import PropTypes from 'prop-types';
import OptionSelect from './OptionSelectInput';

class InputSelect extends React.Component {
  render() {
    const {
      label,
      labelText,
      dataTest,
      name,
      value,
      onChange,
      options,
    } = this.props;

    return (
      <label
        htmlFor={ label }
        data-testid={ label }
      >
        { labelText }
        <select
          data-testid={ dataTest }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          <OptionSelect
            options={ options }
          />
        </select>
      </label>

    );
  }
}

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InputSelect;
