import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ open, handleOpen }) => (
  <button onClick={handleOpen} type="button">
    {open ? 'Close' : 'Open'}
  </button>
);

Toggle.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default Toggle;
