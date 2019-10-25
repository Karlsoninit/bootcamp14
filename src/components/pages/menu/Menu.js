import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import LoginForm from '../LoginForm/LoginForm';

const Menu = ({ authentication }) => (
  <Switch>
    <Route path="/" exact component={Home} />
    {!authentication && <Route path="/login" component={LoginForm} />}
  </Switch>
);

const mapStateToProps = state => ({
  authentication: state.authentication.isAuthentication,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Menu);
