import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, step }) => {
  return (
    <>
      <button type="button" onClick={() => onIncrement(step)}>
        Plus
      </button>
      <h2>{value}</h2>
      <button type="button" onClick={() => onDecrement(step)}>
        Minus
      </button>
    </>
  );
};

export default Counter;
