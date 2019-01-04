// import { take, call, put, select } from 'redux-saga/effects';
import { all, put, takeLatest } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import { LOGIN_ACTION, CANCEL_ACTION } from './constants';

// Individual exports for testing
// export default function* loginContainerSaga() {
//   // See example in containers/HomePage/saga.js

// }

export function* handleLogin() {
  yield put(goBack());
}

export default function* loginContainerSaga() {
  yield all([
    takeLatest(LOGIN_ACTION, handleLogin),
    takeLatest(CANCEL_ACTION, handleLogin),
  ]);
}
