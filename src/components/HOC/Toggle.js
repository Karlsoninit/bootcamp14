import React, { Component } from 'react';

//isOPEN FUNCTION
export const hoc = BaseComponent => {
  return class HOC extends Component {
    state = {
      isOpen: false,
    };

    toggle = () => {
      this.setState(({ isOpen }) => ({
        isOpen: !isOpen,
      }));
    };

    render() {
      const { isOpen } = this.state;
      return (
        <>
          <button onClick={this.toggle} type="button">
            {isOpen ? 'close' : 'open'}
          </button>
          {isOpen && <BaseComponent {...this.props} />}
        </>
      );
    }
  };
};
