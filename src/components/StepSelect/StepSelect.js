import React from 'react';
import Select from 'react-select';

const options = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 40, label: '40' },
];

const getOptionsObject = (options, num) =>
  options.find(elem => elem.value === num);

const StepSelect = ({ valueDefault, handleChange }) => {
  console.log('valueDefault', valueDefault);
  return (
    <Select
      options={options}
      onChange={handleChange}
      value={getOptionsObject(options, valueDefault)}
    />
  );
};

export default StepSelect;
