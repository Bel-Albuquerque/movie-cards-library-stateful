import React from 'react';
import PropTypes from 'prop-types';

class OptionSelect extends React.Component {
  render() {
    const { options } = this.props;
    return (
      <>
        {options.map(({ data, value, text }, index) => (
          <option key={ index } data-testid={ data } value={ value }>{ text }</option>))}
      </>
    );
  }
}

OptionSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default OptionSelect;
