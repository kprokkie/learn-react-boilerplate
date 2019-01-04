/**
 *
 * LinkFormContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLinkFormContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

import LinkForm from '../../components/LinkForm';

/* eslint-disable react/prefer-stateless-function */
export class LinkFormContainer extends React.Component {
  render() {
    return <LinkForm {...this.props.linkFormContainer} />;
  }
}

LinkFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  linkFormContainer: makeSelectLinkFormContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'linkFormContainer', reducer });
const withSaga = injectSaga({ key: 'linkFormContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LinkFormContainer);
