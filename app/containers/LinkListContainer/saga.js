// import { take, call, put, select } from 'redux-saga/effects';
// import {SELECTED_TOPIC} from '../NavigationContainer/constants';
// import { takeLatest } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_LINKS } from './constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';

// Individual exports for testing
// export default function* linkListContainerSaga() {
//   // See example in containers/HomePage/saga.js
// }

// export function fetchLinksFromServer() {
//   return fetch('http://www.mocky.io/v2/5c29200c3300005f00a58bf1')
//     .then(response => response.json());
// }

// function* fetchLinks() {
//   try {
//     const links = yield call(fetchLinksFromServer);
//     console.log('Links from Server: ', links);
//     yield put(requestLinksSucceeded(links));
//   } catch (e) {
//     yield put(requestLinksFailed(e.message));
//   }
// }

export function fetchLinksFromServer(topic) {
  return fetch('http://www.mocky.io/v2/5c29200c3300005f00a58bf1').then(
    response => response.json(),
  );
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    // console.log('Links from Server: ', links);
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

export default function* fetchLinksSaga() {
  yield takeLatest(REQUEST_LINKS, fetchLinks);
}
