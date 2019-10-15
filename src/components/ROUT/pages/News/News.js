import React, { Component } from 'react';
import axios from 'axios';
import NewsList from '../../NewsList/NewsList';
import { getAllNews } from '../../API/API';
import Preloader from '../../Preloader/Preloader';
class News extends Component {
  state = {
    news: [],
    loader: true,
  };

  componentDidMount() {
    console.log('componentDidMount');
    getAllNews().then(data =>
      this.setState({
        news: data,
        loader: false,
      }),
    );
  }

  back = () => {
    this.props.history.push('/');
  };

  render() {
    const { news, loader } = this.state;
    console.log('render');
    return (
      <>
        {loader && <Preloader />}
        {news.length !== 0 && <NewsList data={news} />}
        <button onClick={this.back}>Back to Home</button>
      </>
    );
  }
}

export default News;
