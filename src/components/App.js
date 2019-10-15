import React from 'react';
import NewsRoute from './ROUT/NewsRoute/NewsRoute';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <NewsRoute />
  </Router>
);

export default App;
