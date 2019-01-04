/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, LOGIN_ACTION } from './constants';

export const initialState = fromJS({});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_ACTION:
      return state.set('email', action.email);
    default:
      return state;
  }
}

export default loginContainerReducer;
