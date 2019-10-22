import React from 'react';
import Counter from './Counter/CounterContainer';
import Select from './StepSelect/StepSelectContainer';
import Post from './Post/Post';
import PostSelect from './Post/PostSelect';

const App = () => (
  <>
    <Select />
    <Counter />
    <PostSelect />
    <Post />
  </>
);

export default App;
