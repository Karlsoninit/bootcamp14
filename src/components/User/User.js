import React from 'react';
import PropTypes from 'prop-types';
import css from './User.module.css';

import Descriptions from './User.style';

const style = {
  containerBox: {
    border: '1px solid green',
  },
  imageStyle: {
    width: '400px',
    margin: 'auto',
    display: 'block',
  },
};

const User = ({ user, logo, isOpen }) => {
  console.log(user);
  return (
    <div style={{ ...style.containerBox, backgroundImage: `url(${logo})` }}>
      <p className={isOpen ? css.newtextDecore : css.textDecor}>{user.title}</p>
      <img style={style.imageStyle} src={user.image} alt={user.title} />
      <Descriptions>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit rerum
        debitis ipsum pariatur ducimus vero eum temporibus. Necessitatibus
        aperiam repellendus sequi! Adipisci porro veniam dolorum unde eligendi
        repellendus, est quaerat?
      </Descriptions>
    </div>
  );
};

User.defaultProps = {
  user: [],
  isOpen: false,
  logo:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBhe3fe9sj7akMYE41ndyDo7hIwbcrIQj0O2mop42WBSyb9p1BQ',
};

User.propTypes = {
  logo: PropTypes.string,
  user: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  isOpen: PropTypes.bool,
};

export default User;
