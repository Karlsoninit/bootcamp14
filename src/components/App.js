import React, { Component } from 'react';
import Counter from './Counter';
import Toggle from './Toggle/Toggle';

class App extends Component {
  state = {
    isOpen: true,
    step: 0,
  };

  handleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      step: 0,
    }));
  };

  changeStep = value => {
    this.setState({
      step: Number(value),
    });
  };

  render() {
    const { isOpen, step } = this.state;
    return (
      <>
        <Toggle open={isOpen} handleOpen={this.handleOpen} />
        {isOpen && <Counter step={step} changeStep={this.changeStep} />}
      </>
    );
  }
}

export default App;
