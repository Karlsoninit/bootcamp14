import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Articles from '../pages/Articles/Articles';
import SingleArticle from '../pages/SingleArticle/SingleArticle';
import Description from '../pages/Description/Description';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const RoutePage = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Articles/:articleId" component={SingleArticle} />
    <Route path="/Articles" component={Articles} />
    <Route path="/Description" component={Description} />
    <Route component={PageNotFound} />
  </Switch>
);

export default RoutePage;
