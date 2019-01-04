/*
 *
 * LinkListContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_LINKS,
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
} from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
// }

// export function requestLinks() {
//   return {
//     type: REQUEST_LINKS,
//   };
// }

export function requestLinks(topic) {
  return {
    type: REQUEST_LINKS,
    topic,
  };
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}
