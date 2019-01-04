/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationContainer from '../NavigationContainer/index';
import LinkListContainer from '../LinkListContainer/index';
import LoginContainer from '../LoginContainer';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  // static propTypes = {
  //   children: React.PropTypes.element
  // };

  render() {
    return (
      <div>
        <NavigationContainer />
        <Switch>
          <Route path="/topics/:topic" component={LinkListContainer} />
          <Route path="/login" component={LoginContainer} />
        </Switch>
        {this.props.children}
      </div>
    );
  }
}
