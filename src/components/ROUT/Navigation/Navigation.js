import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: 'white',
  },
  input: {
    display: 'none',
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
            Home
          </Link>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/news">
            News
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Navigation;
