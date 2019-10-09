import React, { Component } from 'react';
import axios from 'axios';
//base url
axios.defaults.baseURL = 'https://newsapi.org/v2/everything?q=';

const fetcHOC = props => BaceComponents => {
  return class FetcHOC extends Component {
    componentDidMount() {
      this.getNewNews();
    }
    getNewNews = query => {
      return axios
        .get(`${query}&apiKey=${props}`)
        .then(data => data.data.articles);
    };

    render() {
      return <BaceComponents data={this.getNewNews} {...this.props} />;
    }
  };
};

export default fetcHOC;
