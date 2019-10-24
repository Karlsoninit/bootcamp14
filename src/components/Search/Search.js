import React, { Component } from 'react';
import css from './Search.module.css';
import { connect } from 'react-redux';
import { getSearchValue } from './SearchActions';

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
        <h2>{this.props.word}</h2>
      </>
    );
  }
}

const mapStateToProps = state => ({
  word: state.news.search,
});

const mapDispatchToProps = {
  getSearchValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
