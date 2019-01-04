// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  REQUEST_TOPICS,
  SELECTED_TOPIC,
  REQUEST_TOPICS_SUCCEEDED,
} from './constants';
// import { takeLatest } from 'redux-saga/effects';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import makeSelectNavigationContainer from './selectors';

// Individual exports for testing
// export default function* navigationContainerSaga() {
//   // See example in containers/HomePage/saga.js
// }

// http://www.mocky.io/v2/5c2843643300002a00a58b45
// https://api.github.com/search/repositories?q=react-boilerplate
// {
//   "topics": [
//     {
//       "name": "libraries",
//       "description": "open libraries"
//     },
//     {
//       "name": "apps",
//       "description": "open apps"
//     },
//     {
//       "name": "news",
//       "description": "open news"
//     }
//   ]
// }

export function fetchTopicsFromServer() {
  return fetch('http://www.mocky.io/v2/5c2853483300005d00a58b4e').then(
    response => response.json(),
  );
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    // console.log('Topics from Server: ', topics);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* pushTopic(action) {
  // console.log(action.topic);
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectDefaultTopic(action) {
  const state = yield select(makeSelectNavigationContainer());
  // console.log(state);
  if (!state.selectedTopic && state.routerLocation === '/') {
    yield put(push(`/topics/${action.topics[0].name}`));
  }
}

// export function* selectDefaultTopicSaga() {
//   yield takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic);
// }

export function* selectTopicSaga() {
  yield takeLatest(SELECTED_TOPIC, pushTopic);
}

// export default function* fetchTopicsSaga() {
//   yield takeLatest(REQUEST_TOPICS, fetchTopics);
// }

// export default function* fetchTopicsSaga() {
//   yield [takeLatest(REQUEST_TOPICS, fetchTopics),
//     takeLatest(SELECTED_TOPIC, pushTopic)];
// }

export default function* fetchTopicsSaga() {
  yield all([
    takeLatest(REQUEST_TOPICS, fetchTopics),
    takeLatest(SELECTED_TOPIC, pushTopic),
    takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic),
  ]);
}
