import React, { Component } from 'react';
import { fetchNews } from '../../routApi';
import ArticleList from '../ArticleList/ArticleList';
import { Route } from 'react-router-dom';
import SingleArticle from '../SingleArticle/SingleArticle';
class Articles extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    fetchNews().then(data =>
      this.setState({
        news: data,
      }),
    );
  }

  render() {
    const { news } = this.state;
    console.log(news);
    return (
      <>
        <ArticleList data={news} />
      </>
    );
  }
}

export default Articles;
