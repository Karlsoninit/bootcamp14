import React from 'react';
import RoutingUpComponent from './Routing/RoutingUpComponent/RoutingUpComponent';
import { BrowserRouter as Router } from 'react-router-dom';
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
