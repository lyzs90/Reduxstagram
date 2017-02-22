import 'babel-polyfill';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchAll, getComments } from './api';

/*
  worker Saga will be fired on FETCH_POSTS_REQUESTED actions
*/
export function *fetchData() {
  const routes = ['/posts', '/comments'];
  const data = yield routes.map((r) => call(fetchAll, r));
  yield put({type: 'FETCH_DATA_SUCCEEDED', data});
}

/*
  Starts fetchPosts on each dispatched FETCH_POSTS_REQUESTED action
  Allows concurrent fetches of posts
*/
export function *watchFetchData() {
  yield takeEvery('FETCH_DATA_REQUESTED', fetchData);
}

/*
  Single entry point to start all Sagas at once
*/
export default function *rootSaga() {
  yield [
    watchFetchData()
  ]
}
