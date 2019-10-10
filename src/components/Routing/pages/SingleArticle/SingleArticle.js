import React, { Component } from 'react';
import { getUniqueAuthor } from '../../routApi';

class SingleArticle extends Component {
  state = {
    single: [],
  };

  componentDidMount() {
    getUniqueAuthor(this.props.match.params.articleId).then(elem =>
      this.setState({
        single: elem,
      }),
    );
  }

  back = () => {
    this.props.history.push('/Articles');
  };

  render() {
    const { single } = this.state;
    console.log(this.state.single);
    console.log(this.props.match.params.articleId);
    return single.map(({ urlToImage, author, description }) => (
      <div key={author}>
        <h2>{author}</h2>
        <img src={urlToImage} />
        <p>{description}</p>

        <button onClick={this.back}>back to ...</button>
      </div>
    ));
  }
}

export default SingleArticle;
