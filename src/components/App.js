import React, { createContext } from 'react';
import Counter from './Counter/Counter';
import Post from './Post/Post';
import Test from './Test/Test';

export const { Provider, Consumer } = createContext();
const App = () => {
  return (
    <>
      <Provider
        value={{
          word: 'work',
        }}
      >
        <Test />
      </Provider>
      <Counter />
      <Post />
    </>
  );
};
export default App;
