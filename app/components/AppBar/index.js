/**
 *
 * AppBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AppBar({ email }) {
  return (
    <div>
      {email || <Link to="/login">Login</Link>}
      {/* <Link to="/login">Login</Link> */}
    </div>
  );
}

AppBar.propTypes = {};

export default AppBar;
