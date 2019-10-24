import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from './NewsOperations';
import Spinner from '../Spinner/Spinner';
class News extends Component {
  state = {};
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { news, spinner } = this.props;
    return (
      <>
        {spinner && <Spinner />}
        {news.map(article => (
          <h2>{article.title}</h2>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  news: state.DailyMail.news,
  spinner: state.DailyMail.loader,
});

const mapDispatchToProps = {
  getNews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(News);
