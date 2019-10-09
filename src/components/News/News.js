import React, { Component, createContext } from 'react';
import NewsList from '../NewsList/NewsList';
import SearchNewsForm from '../SearchNewsForm/SearchNewsForm';
import Selected from '../Selected/Selected';
import defaultCategory from '../../category.json';
import { hoc } from '../HOC/Toggle';
import FetchHOC from '../HOC/FetchHOC';

export const { Provider, Consumer } = createContext({
  createMe: 'I am',
});
class News extends Component {
  state = {
    articles: [],
    query: null,
    category: '',
    name: 'Maksim',
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.state;
    // console.log('prevState', prevState);
    // console.log('this.state', this.state);
    if (prevState.category !== category) {
      this.fetchArticles(category);
    }
  }

  handleSubmit = value => {
    console.log(value);
    // this.setState({
    //   query: value,
    // });
    this.fetchArticles(value);
  };

  fetchArticles = query => {
    this.props.data(query).then(data =>
      this.setState({
        articles: data,
      }),
    );
  };

  getValueSelect = value => {
    this.setState({
      category: value,
    });
  };

  render() {
    const { articles, category, query } = this.state;
    return (
      <>
        <Provider value={{ name: this.state.name }}>
          <SearchNewsForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            query={query}
          />
          <Selected
            handleChange={this.getValueSelect}
            selected={defaultCategory}
            value={category}
          />
          <NewsList articles={articles} />
        </Provider>
      </>
    );
  }
}

// export default hoc(News);

export default hoc(FetchHOC('86efb1d9e5074721b8f151f282c7bcf7')(News));
