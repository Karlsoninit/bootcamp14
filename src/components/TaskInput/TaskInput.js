import React from 'react';
import ProppTypes from 'prop-types';
import css from './TaskInput.module.css';

const TaskInput = ({ handleChange, name, value }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={css.labelGroup}>
    {name}
    <input
      onChange={handleChange}
      className={css.input}
      type="text"
      name={name}
      value={value}
    />
  </label>
);

TaskInput.propTypes = {
  handleChange: ProppTypes.func.isRequired,
  name: ProppTypes.string.isRequired,
  value: ProppTypes.string.isRequired,
};

export default TaskInput;
