import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/Authentication/AuthenticationOperations';
import css from './LoginForm.module.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    if (this.props.authentication) {
      this.props.history.replace('/');
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    //obj
    // console.log(this.state);
    this.props.login(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={css.container} onSubmit={this.handleSubmit}>
        <input
          className={css.input}
          onChange={this.handleChange}
          type="email"
          name="email"
          value={email}
        />
        <input
          className={css.input}
          onChange={this.handleChange}
          type="password"
          name="password"
          value={password}
        />
        <button className={css.btn} type="submit">
          Login
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication.isAuthentication,
});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
