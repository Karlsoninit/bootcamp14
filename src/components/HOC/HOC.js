import React, { Component } from 'react';

const toogleDefaultMenu = props => BaseComponent => {
  return class toogleDefaultMenu extends Component {
    state = {
      isOpen: false,
    };

    onOpen = () => {
      this.setState(({ isOpen }) => ({
        isOpen: !isOpen,
      }));
    };
    render() {
      const { isOpen } = this.state;

      return (
        <>
          <button onClick={this.onOpen}>{isOpen ? 'close' : 'open'}</button>
          {isOpen && <BaseComponent word={props} {...this.props} />}
        </>
      );
    }
  };
};

export default toogleDefaultMenu;
