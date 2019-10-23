import React from 'react';
import { Consumer } from '../App';
// import toogleDefaultMenu from '../HOC/HOC';

const Test = () => {
  return (
    <Consumer>
      {context => {
        return <h2>{context.word}</h2>;
      }}
    </Consumer>
  );
};

export default Test;
