import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Counter.module.css';
import SelectStep from '../SelectStep/SelectStep';

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + this.props.step }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - this.props.step }));
  };

  render() {
    const { step, changeStep } = this.props;
    const { count } = this.state;

    return (
      <div className={css.container}>
        <SelectStep changeStep={changeStep} />
        <h2 className={css.count} style={{ color: 'green' }}>
          {count}
        </h2>
        {step > 0 && (
          <div className={css.btnGroup}>
            <button
              className={css.btn}
              type="button"
              onClick={this.handleIncrement}
            >
              Increment {step}
            </button>
            <button
              className={css.btn}
              type="button"
              onClick={this.handleDecrement}
            >
              Decrement {step}
            </button>
          </div>
        )}
      </div>
    );
  }
}

Counter.defaultProps = {
  step: 5,
};

Counter.propTypes = {
  step: PropTypes.number,
  changeStep: PropTypes.func.isRequired,
};

export default Counter;
