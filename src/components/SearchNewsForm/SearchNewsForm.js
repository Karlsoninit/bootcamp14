import React, { Component } from 'react';

// const SearchNewsForm = ({ onChange, onSubmit, query }) => (
//   <form onSubmit={onSubmit}>
//     <input
//       value={query}
//       type="text"
//       onChange={({ target }) => onChange(target.value)}
//     />
//     <button type="submit">Search</button>
//   </form>
// );

// export default SearchNewsForm;

class SearchNewsForm extends Component {
  state = {
    queryInner: '',
  };

  handleSubmit = e => {
    const { queryInner } = this.state;
    e.preventDefault();
    this.props.onSubmit(queryInner);
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      queryInner: value,
    });
  };

  render() {
    const { queryInner } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={queryInner} type="text" onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchNewsForm;
