import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Loadable from 'react-loadable';
import Preloader from '../Preloader/Preloader';

const News = lazy(() =>
  import('../pages/News/News' /* webpackChunkName: 'pageNews'*/),
);
const Home = Loadable({
  loader: () => import('../pages/Home/Home' /* webpackChunkName: 'pageHome'*/),
  loading: Preloader,
  delay: 200,
});

const SingleArticle = Loadable({
  loader: () =>
    import(
      '../pages/SingleArticle/SingleArticle' /* webpackChunkName: 'pageSingleArticle'*/
    ),
  loading: Preloader,
  delay: 200,
});

const NavRouting = () => (
  <Suspense fallback={<div>loading ......</div>}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/news/:someArticle" component={SingleArticle} />
      <Route path="/news" component={News} />
      <Route component={ErrorPage} />
    </Switch>
  </Suspense>
);

export default NavRouting;
