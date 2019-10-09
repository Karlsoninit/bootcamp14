import React from 'react';
import shortId from 'shortid';

const Selected = ({ selected, handleChange, value }) => (
  <select value={value} onChange={({ target }) => handleChange(target.value)}>
    {selected.map(select => (
      <option key={shortId()}>{select}</option>
    ))}
  </select>
);

export default Selected;
