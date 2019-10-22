import React from 'react';

const MenuList = ({ data }) => (
  <div style={{ width: '400px', border: '1px solid tomato' }}>
    <h2>{data.name}</h2>
    <p>{data.description}</p>
  </div>
);

export default MenuList;
