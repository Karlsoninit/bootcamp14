import React, { Component } from 'react';
import { getPost } from '../Post/PostOperations';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';

class Post extends Component {
  state = {};

  componentDidMount() {
    this.props.getPost();
  }

  render() {
    const { post, loader } = this.props;
    return (
      <>
        {loader && <Spinner />}
        {post.length > 0 &&
          post.map(({ title, publishedAt }) => (
            <div key={publishedAt}>
              <h2>{title}</h2>
            </div>
          ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  loader: state.isLoading,
});

const mapDispatchToProps = {
  getPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
