import { createSelector } from 'reselect';
import { initialState } from './reducer';
import makeSelectNavigationContainer from '../NavigationContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */

const selectLinkListContainerDomain = state =>
  state.get('linkListContainer', initialState);

/**
 * Other specific selectors
 */

// react router passes from url to the comp props
const selectRouteTopic = () => (state, props) => props.match.params.topic;

const selectTopic = () =>
  createSelector(
    makeSelectNavigationContainer(),
    selectRouteTopic(),
    (navigationState, routeTopic) => {
      // console.log(navigationState);
      // console.log(routeTopic);
      const selectedTopic = navigationState.topics.find(
        t => t.name === routeTopic,
      );

      return selectedTopic || { name: '' };
    },
  );

/**
 * Default selector used by LinkListContainer
 */

// const makeSelectLinkListContainer = () =>
//   createSelector(
//     selectLinkListContainerDomain,
//     selectRouteTopic(),
//     (substate, routeTopic) => { console.log(routeTopic); console.log(substate.toJS()); return substate.toJS() });

const makeSelectLinkListContainer = () =>
  createSelector(
    selectLinkListContainerDomain,
    // selectRouteTopic(),
    selectTopic(),
    (substate, topic) =>
      // console.log(topic);
      Object.assign(substate.toJS(), { topic: topic.name }),
  );

export default makeSelectLinkListContainer;
export { selectLinkListContainerDomain };
