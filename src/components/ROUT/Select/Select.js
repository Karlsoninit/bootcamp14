import React from 'react';
import Selected from 'react-select';

const Select = ({ handleChange, value, options }) => (
  <Selected onChange={handleChange} options={options} value={value} />
);

export default Select;
