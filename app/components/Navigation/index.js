/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AppBar from '../AppBar';

function Navigation({ topics, email, selectTopic }) {
  // console.log(topics);
  const topicNodes = topics.map(topic => (
    <div key={topic.name} onClick={() => selectTopic(topic)}>
      {topic.name}
    </div>
  ));
  function TopicsList({ topics }) {
    return (
      <div>
        {topics.map(topic => (
          <div key={topic.name}>{topic.name}</div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <p>This is the Navigation Component.</p>
      <AppBar email={email} />
      <p>We have {topics.length} topics in the nav component.</p>
      {/* <TopicsList topics={topics}/> */}
      {topicNodes}
    </div>
  );
}

Navigation.propTypes = {
  // topics: React.PropTypes.arrayOf(
  //   React.PropTypes.shape({
  //     name: React.PropTypes.string.isRequired,
  //     description: React.PropTypes.string.isRequired
  //   })
  // ).isRequired,
  // selectTopic: React.PropTypes.func.isRequired
};

export default Navigation;
