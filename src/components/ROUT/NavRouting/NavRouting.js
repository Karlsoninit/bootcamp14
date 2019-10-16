import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';

import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SingleArticle from '../pages/SingleArticle/SingleArticle';
import Loadable from 'react-loadable';
import Preloader from '../Preloader/Preloader';

const loadNews = Loadable({
  loader: () => import('../pages/News/News' /* webpackChunkName: 'pageNews'*/),
  loading: Preloader,
  delay: 300,
});

const NavRouting = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/news/:someArticle" component={SingleArticle} />
    <Route path="/news" component={loadNews} />
    <Route component={ErrorPage} />
  </Switch>
);

export default NavRouting;
