import React, { Component } from 'react';
import { fetchPost } from '../redux/actions';
import { connect } from 'react-redux';
import posts from '../../menu.json';

class Post extends Component {
  state = {};
  componentDidMount() {
    this.props.getAllPosts(posts);
  }

  render() {
    const { post } = this.props;
    return (
      <>
        {post.map(({ name, description, ingredients }) => (
          <>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{ingredients}</p>
          </>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  post: state.counter.posts,
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: post => dispatch(fetchPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
