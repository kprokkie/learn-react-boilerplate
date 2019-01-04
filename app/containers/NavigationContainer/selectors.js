import { createSelector } from 'reselect';
import { initialState } from './reducer';
import makeSelectLoginContainer, {
  selectLoginContainerDomain,
} from '../LoginContainer/selectors';

/**
 * Direct selector to the navigationContainer state domain
 */

const selectNavigationContainerDomain = state =>
  state.get('navigationContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NavigationContainer
 */

// const makeSelectNavigationContainer = () =>
//   createSelector(selectNavigationContainerDomain, substate => substate.toJS());

const makeSelectNavigationContainer = () =>
  createSelector(
    selectNavigationContainerDomain,
    makeSelectLoginContainer(),
    (substate, loginSubstate) => Object.assign(substate.toJS(), loginSubstate),
  );

// const makeSelectNavigationTopics = () =>
//   createSelector(selectNavigationContainerDomain, substate =>
//     { console.log(substate.toJS().topics); return substate.toJS();});

// const makeSelectNavigationTopics = () =>
//   createSelector(selectNavigationContainerDomain, substate => substate.toJS().topics);

export default makeSelectNavigationContainer;
// export default makeSelectNavigationTopics;
export { selectNavigationContainerDomain };
