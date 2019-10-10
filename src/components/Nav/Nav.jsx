import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  color: 'red',
};

const Nav = () => (
  <ul style={{ listStyle: 'none' }}>
    <li>
      <NavLink activeStyle={linkStyle} exact to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={linkStyle} to="/Articles">
        Articles
      </NavLink>
    </li>

    <li>
      <NavLink activeStyle={linkStyle} to="/Description">
        Description
      </NavLink>
    </li>
  </ul>
);

export default Nav;
