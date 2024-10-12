import { reducer as movieReducer } from './reducer';
import * as Models from './models';
import { createAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import * as FuncSaga from './saga';

export const getListMovie = createAction<Models.IActionGetListMoviesPayload>(Models.GET_LIST_MOVIE);

function* movieSaga() {
    yield takeEvery(getListMovie, FuncSaga.getListMovieFn);
}

export { movieSaga, movieReducer };
