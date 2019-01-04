/*
 *
 * LoginContainer actions
 *
 */

import { DEFAULT_ACTION, LOGIN_ACTION, CANCEL_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginAction(email) {
  return {
    type: LOGIN_ACTION,
    email,
  };
}

export function cancelAction() {
  return {
    type: CANCEL_ACTION,
  };
}
