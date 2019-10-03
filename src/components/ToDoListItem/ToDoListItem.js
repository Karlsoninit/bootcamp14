import React from 'react';
import PropTypes from 'prop-types';
import css from './ToDoListItem.module.css';

const ToDoListItem = ({ task, description, handleDelete, id }) => (
  <li className={css.taskKontainer}>
    <h2>{task}</h2>
    <p>{description}</p>
    <button id={id} onClick={handleDelete} type="button">
      delete
    </button>
  </li>
);

ToDoListItem.propTypes = {
  task: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ToDoListItem;
