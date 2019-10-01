import React from 'react';
import PropTypes from 'prop-types';

const SelectStep = ({ changeStep }) => (
  <select onChange={evt => changeStep(evt.target.value)}>
    <option disabled="true" selected="selected">
      choose some numbers
    </option>
    <option>5</option>
    <option>10</option>
    <option>20</option>
  </select>
);

SelectStep.propTypes = {
  changeStep: PropTypes.func.isRequired,
};

export default SelectStep;
