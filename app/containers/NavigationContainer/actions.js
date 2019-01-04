/*
 *
 * NavigationContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECTED_TOPIC,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceeded(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEEDED,
    topics,
  };
}

export function requestTopicsFailed(message) {
  return {
    type: REQUEST_TOPICS_FAILED,
    message,
  };
}

export function selectedTopic(topic) {
  return {
    type: SELECTED_TOPIC,
    topic,
  };
}
