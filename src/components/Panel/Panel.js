import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import NotFound from '../NotFound/NotFound';

const Panel = ({ isOpen, user }) => (
  <>
    <button
      type="button"
      onClick={() => {
        alert('click');
      }}
    >
      Open
    </button>
    {user.length === 0 && <p>Upssss ....</p>}
    {isOpen ? (
      user.map(elem => (
        <User
          key={elem.id}
          user={elem}
          logo="https://media.proglib.io/wp-uploads/-000//1/jstips-animation.gif"
          isOpen
        />
      ))
    ) : (
      <NotFound />
    )}
  </>
);

Panel.defaultProps = {
  user: [],
};

Panel.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  isOpen: PropTypes.bool.isRequired,
};
export default Panel;
