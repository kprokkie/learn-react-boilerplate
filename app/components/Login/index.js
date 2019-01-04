/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import validator from 'email-validator';

/* eslint-disable react/prefer-stateless-function */
class Login extends React.Component {

  // static propTypes ={
  //   login: React.PropTypes.func.isRequired
  // };

  state = {

  };

  // login() {
  //   console.log('logged in', this.emailField.value);
  // }

  login = () => {
    console.log('logged in as ', this.emailField.value);
    const email = this.emailField.value;
    if (!validator.validate(email)) {
      console.error('not a valid email');
      this.setState({ errorText: 'Please provide a valid email.' });
      return;
    }

    this.setState({ errorText: null });
    this.props.login(email);
  };

  cancel = () => {
    this.props.cancel();
  };

  render() {

    const fieldError = this.state.errorText ? 
      <div>{this.state.errorText}</div>
    ) : (
      <div />
    );

    return (
      <div>
        <div>Login here....</div>
        <div>
          <input
            type="text"
            placeholder="Your Email"
            ref={f => {
              this.emailField = f;
            }}
          />
          {fieldError}
          <div>
            <div onClick={this.cancel}>Cancel</div>
            <div onClick={this.login}>Login</div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
