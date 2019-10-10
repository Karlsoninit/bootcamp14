import React from 'react';
import News from './News';
import TestComponent from './TestComponent/TestComponent';
import RenderProp from './HOC/renderProp';
// import ToDo from './ToDo';

const App = () => {
  return (
    <>
      <News />
      <RenderProp>
        {({ on, drop }) => (
          <>
            <button onClick={drop}>Click</button>
            {on && <TestComponent />}
          </>
        )}
      </RenderProp>
      <RenderProp>
        {({ on, drop }) => (
          <>
            <button onClick={drop}>HA-HA</button>
            {on && <TestComponent />}
          </>
        )}
      </RenderProp>
    </>
  );
};
export default App;
