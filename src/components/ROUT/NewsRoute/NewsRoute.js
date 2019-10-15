import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SingleArticle from '../pages/SingleArticle/SingleArticle';

const NewsRoute = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/news/:someArticle" component={SingleArticle} />
      <Route path="/news" component={News} />
      <Route component={ErrorPage} />
    </Switch>
  </>
);

export default NewsRoute;
