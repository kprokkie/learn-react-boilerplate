/**
 *
 * LinkListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Switch, Route } from 'react-router-dom';
import makeSelectLinkListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

import LinkList from '../../components/LinkList/index';
import { requestLinks } from './actions';
import LinkFormContainer from '../LinkFormContainer';

/* eslint-disable react/prefer-stateless-function */
export class LinkListContainer extends React.Component {
  componentWillMount() {
    // console.log(this.props.match.params.topic);
    // console.log(this.props.linkListContainer.topic);
    this.props.requestLinks(this.props.match.params.topic);
  }

  componentWillReceiveProps(newProps) {
    // console.log(newProps);
    // console.log(this.props);
    if (newProps.match.params.topic != this.props.linkListContainer.topic) {
      // console.log(newProps.match.params.topic);
      this.props.requestLinks(newProps.match.params.topic);
    }
  }

  render() {
    return (
      <div>
        <LinkList {...this.props.linkListContainer} match={this.props.match} />
        <Route path="/topics/:topic/link" component={LinkFormContainer} />
      </div>
    );
  }
}

LinkListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  linkListContainer: makeSelectLinkListContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // requestLinks: () => dispatch(requestLinks()),
    requestLinks: topic => dispatch(requestLinks(topic)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'linkListContainer', reducer });
const withSaga = injectSaga({ key: 'linkListContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LinkListContainer);
