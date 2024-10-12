import {PayloadAction} from '@reduxjs/toolkit';
import { call, put} from 'redux-saga/effects';
import * as Payload from './models';
import * as MovieServices from './service';
import {saveListMovie} from './reducer';
export function* getListMovieFn(
  action: PayloadAction<Payload.IActionGetListMoviesPayload>,
) {
  const {onSuccess, onFail, page = 1, limit = 20} = action.payload;
  const {result, error} = yield call(MovieServices.getListMovie, page, limit);
  if (!error) {
    yield put(saveListMovie({listMovie: result, loadMore: page !== 1}));
    onSuccess && onSuccess(result);
  } else {
    onFail && onFail(error);
  }
}
