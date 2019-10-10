import React, { Component } from 'react';
// import { hoc } from '../HOC/Toggle';
// import fetcHOC from '../HOC/FetchHOC';

class TestComponent extends Component {
  state = {};
  // componentDidMount() {
  //   this.props.data().then(console.log);
  // }

  render() {
    return <p>TestComponent</p>;
  }
}

// export default fetcHOC('86efb1d9e5074721b8f151f282c7bcf7')(TestComponent);

// export default hoc(TestComponent);

export default TestComponent;
