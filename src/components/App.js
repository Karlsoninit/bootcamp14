import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutingUpComponent from './Routing/RoutingUpComponent/RoutingUpComponent';
// import News from './News';

// import ToDo from './ToDo';

const App = () => {
  return (
    <Router>
      <RoutingUpComponent />
    </Router>
  );
};
export default App;
