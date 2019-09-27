import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Container from './NotFound.style';

class NotFound extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Loader
          type="Watch"
          color="#00BFFF"
          height={200}
          width={200}
          timeout={10000} // 3 secs
        />
      </Container>
    );
  }
}

export default NotFound;
