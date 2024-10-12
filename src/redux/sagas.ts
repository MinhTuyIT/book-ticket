import { movieSaga } from '../modules/movie';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    fork(movieSaga),
  ]);
}
