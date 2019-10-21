import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { chooseStep } from '../redux/actions';

const options = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 40, label: '40' },
];

const StepSelect = ({ valueDefault, handleChange }) => (
  <Select options={options} onChange={handleChange} value={valueDefault} />
);

const mapStateToProps = state => ({
  valueDefault: state.counter.step,
});
const mapDispatchToProps = dispatch => ({
  handleChange: step => dispatch(chooseStep(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepSelect);
