/**
 *
 * NavigationContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNavigationContainer from './selectors';
// import makeSelectNavigationTopics from './selectors';
import reducer from './reducer';
import saga from './saga';

import Navigation from '../../components/Navigation/index';
import { requestTopics, selectedTopic } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class NavigationContainer extends React.Component {
  // static propTypes = {
  //   requestTopics: React.PropTypes.func.isRequired
  // }

  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    // console.log(this.props);
    // const {topics} = this.props.navigationContainer;
    // console.log(this.props.navigationContainer);
    // console.log(this.props.navigationContainer);
    // return <Navigation {...this.props} selectTopic={this.props.selectTopic} />;
    return (
      <Navigation
        {...this.props.navigationContainer}
        selectTopic={this.props.selectTopic}
      />
    );
  }
}

NavigationContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navigationContainer: makeSelectNavigationContainer(),
  // navigationTopics: makeSelectNavigationTopics(),
  // topics: makeSelectNavigationTopics(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    requestTopics: () => dispatch(requestTopics()),
    // selectTopic: (topic) => console.log('Selected Topic: ', topic),
    selectTopic: topic => dispatch(selectedTopic(topic)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'navigationContainer', reducer });
const withSaga = injectSaga({ key: 'navigationContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavigationContainer);
