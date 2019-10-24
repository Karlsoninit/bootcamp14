import React, { Component } from 'react';
import css from './Search.module.css';
import Axios from 'axios';

class Search extends Component {
  state = {
    value: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.getSearchValue(this.state.value);
    this.setState({
      value: '',
    });
  };

  handleChange = evt => {
    this.setState({
      value: evt.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <form className={css.container} onSubmit={this.handleSubmit}>
          <input value={value} onChange={this.handleChange} type="text" />
          <button type="submit">SEARCH</button>
        </form>
      </>
    );
  }
}

export default Search;
