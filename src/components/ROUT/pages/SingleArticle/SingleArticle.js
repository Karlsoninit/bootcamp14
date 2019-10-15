import React, { Component } from 'react';

import { getAllNews } from '../../API/API';
import Preloader from '../../Preloader/Preloader';
class SingleArticle extends Component {
  state = {
    article: {},
    loader: true,
  };
  componentDidMount() {
    getAllNews().then(data =>
      this.setState({
        article: data.find(
          elem => elem.publishedAt === this.props.match.params.someArticle,
        ),
        loader: false,
      }),
    );
  }

  back = () => {
    this.props.history.push('/news');
  };
  render() {
    console.log('SingleArticle', this.props.match.params.someArticle);
    console.log(this.state.article);
    const { description, urlToImage, title } = this.state.article;
    return (
      <div>
        <div style={{ position: 'absolute', top: '50%', left: '45%' }}>
          {this.state.loader && <Preloader />}
        </div>
        <h2>{title}</h2>
        <img src={urlToImage} />
        <p>{description}</p>
        <button onClick={this.back}>back to news</button>
      </div>
    );
  }
}

export default SingleArticle;
