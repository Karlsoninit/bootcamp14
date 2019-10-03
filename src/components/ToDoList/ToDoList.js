import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import ToDoListItem from '../ToDoListItem';
import css from './ToDoList.module.css';

const ToDoList = ({ tasks, handleDelete }) => {
  return (
    <ul className={css.listContainer}>
      {tasks.length ? (
        tasks.map(task => (
          <ToDoListItem handleDelete={handleDelete} key={task.id} {...task} />
        ))
      ) : (
        <Loader
          className={css.preloader}
          type="Watch"
          color="#00BFFF"
          height={200}
          width={200}
          //   timeout={3000} // 3 secs
        />
      )}
    </ul>
  );
};

ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ToDoList;

// PropTypes.shape({
//     task: PropTypes.string,
//     description: PropTypes.string,
//     id: PropTypes.string,
//   }),
