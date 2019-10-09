import React, { Component } from 'react';
import shortId from 'shortid';
import ToDoForm from '../ToDoForm';
import ToDoList from '../ToDoList';

class ToDo extends Component {
  state = {
    tasks: [],
    task: '',
    description: '',
  };

  componentDidMount() {
    console.log('componentDidMount');

    const getTaskToLocal = localStorage.getItem('tasks');
    if (getTaskToLocal) {
      this.setState({
        tasks: JSON.parse(getTaskToLocal),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    console.log('componentDidUpdate');
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.addTask();
    this.setState({ task: '', description: '' });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  addTask = () => {
    const { task, description } = this.state;
    const addTask = {
      task,
      description,
      id: shortId(),
    };

    this.setState(({ tasks }) => ({
      tasks: [...tasks, addTask],
    }));
  };

  handleDelete = ({ target }) => {
    const { id } = target;
    this.setState(({ tasks }) => ({
      tasks: tasks.filter(task => task.id !== id),
    }));
  };

  render() {
    console.log('render');
    const { tasks, task, description } = this.state;

    return (
      <>
        <ToDoForm
          task={task}
          description={description}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <ToDoList tasks={tasks} handleDelete={this.handleDelete} />
      </>
    );
  }
}

export default ToDo;
