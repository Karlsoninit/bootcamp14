import React from 'react';
import PropTypes from 'prop-types';
import css from './ToDoForm.module.css';

const ToDoForm = ({ handleSubmit, handleChange, task, description }) => (
  <form onSubmit={handleSubmit} className={css.container}>
    <input
      onChange={handleChange}
      className={css.task}
      type="text"
      name="task"
      placeholder="enter your task ..."
      value={task}
    />
    <textarea
      className={css.description}
      name="description"
      placeholder="enter your descriptions ..."
      onChange={handleChange}
      value={description}
    />
    <button className={css.btn} type="submit">
      Add
    </button>
  </form>
);

ToDoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  task: PropTypes.func.isRequired,
  description: PropTypes.func.isRequired,
};

export default ToDoForm;
