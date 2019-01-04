import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the linkFormContainer state domain
 */

const selectLinkFormContainerDomain = state =>
  state.get('linkFormContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LinkFormContainer
 */

const makeSelectLinkFormContainer = () =>
  createSelector(selectLinkFormContainerDomain, substate => substate.toJS());

export default makeSelectLinkFormContainer;
export { selectLinkFormContainerDomain };
