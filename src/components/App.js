import React from 'react';
import Panel from './Panel/Panel';
import user from '../user.json';

const App = () => {
  return (
    <>
      <Panel isOpen user={user} />
    </>
  );
};
export default App;
