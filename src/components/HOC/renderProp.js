import React, { Component } from 'react';

class RenderProp extends Component {
  state = {
    isOpen: false,
  };
  open = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  render() {
    return this.props.children({
      on: this.state.isOpen,
      drop: this.open,
    });
  }
}

export default RenderProp;
