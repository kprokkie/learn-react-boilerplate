/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
} from './constants';

// export const initialState = fromJS({
//   "links": [
//     {
//       "desc": "link description",
//       "url": "https://link",
//       "topicName": "links",
//       "id": 1
//     }
//   ]
// });

export const initialState = fromJS({
  links: [],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEEDED:
      // console.log(action.links);
      return state.set('links', action.links);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default linkListContainerReducer;
