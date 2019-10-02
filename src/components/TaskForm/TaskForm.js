import React, { Component } from 'react';
import css from './TaskForm.module.css';
import TaskInput from '../TaskInput/TaskInput';

const INITIAL_STATE = {
  name: '',
  password: '',
  email: '',
  confirm: '',
};

const KEY = {
  name: 'name',
  password: 'password',
  email: 'email',
  confirm: 'confirm',
};

class TaskForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name } = evt.target;
    this.setState({ [name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, password, email, confirm } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.formContainer}>
        <TaskInput
          handleChange={this.handleChange}
          name={KEY.name}
          value={name}
        />
        <TaskInput
          handleChange={this.handleChange}
          name={KEY.password}
          value={password}
        />
        <TaskInput
          handleChange={this.handleChange}
          name={KEY.email}
          value={email}
        />
        <TaskInput
          handleChange={this.handleChange}
          name={KEY.confirm}
          value={confirm}
        />

        <button type="submit">submit</button>
      </form>
    );
  }
}

export default TaskForm;
