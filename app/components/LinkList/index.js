/**
 *
 * LinkList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import './styles.scss';
import { Link } from 'react-router-dom';

// Create a <Title> react component that renders an <h1>
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function LinkList({ links, topic, match }) {
  const linkNodes = links.map(link => (
    <div className="link" key={link.id}>
      {link.url} - {link.desc}
    </div>
  ));

  return (
    <div>
      <FontAwesome name="bars" />
      <Title>Link List for {topic}</Title>
      <Link to={`${match.url}/link`}>Add Link</Link>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {};

export default LinkList;
