/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECTED_TOPIC,
} from './constants';

// export const initialState = fromJS({
//   topics: [
//     {
//       name: 'libraries',
//       description: 'open libraries'
//     },
//     {
//       name: 'apps',
//       description: 'open apps'
//     },
//     {
//       name: 'news',
//       description: 'open news'
//     }
//   ]
// });

export const initialState = fromJS({
  topics: [],
  selectedTopic: '',
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      // console.log(action.topics);
      return state.set('topics', action.topics);
    case '@@router/LOCATION_CHANGE':
      // console.log(action);
      return state.set('routerLocation', action.payload.location.pathname);
    case SELECTED_TOPIC:
      // console.log(action.topic);
      return state.set('selectedTopic', action.topic);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
