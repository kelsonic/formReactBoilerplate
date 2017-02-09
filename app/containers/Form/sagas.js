import { takeLatest } from 'redux-saga';
import { put, take, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { updateInput } from './actions';
import { UPDATE_INPUT_LABEL } from './constants';

/**
 * Clears the input value when the label is changed.
 */
function* clearInputValue() {
  // `put` fires off other actions for us.
  yield put(updateInput(''));
}

/**
 * Watcher will listen for specific actions to be fired.
 */
function* watcherSaga() {
  yield fork(takeLatest, UPDATE_INPUT_LABEL, clearInputValue);
}

/**
 * Root saga manages watcher lifecycle
 */
function* formSaga() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(watcherSaga);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  formSaga,
];
