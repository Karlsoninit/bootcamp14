import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = ({ authentication }) => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    {!authentication && (
      <li>
        <Link to="/login">Login</Link>
      </li>
    )}
  </ul>
);

const mapStateToProps = state => ({
  authentication: state.authentication.isAuthentication,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Navigation);
