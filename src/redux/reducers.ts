import { movieReducer } from '../modules/movie';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { PersistConfig, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { IMovieState } from '../modules/movie/models';

const userPersist: PersistConfig<IMovieState> = {
  key: 'movie',
  whitelist: ['listFavorite', 'listBooked'],
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
  movie: persistReducer(userPersist, movieReducer),
});

export type RootState = ReturnType<typeof reducers>;

export const selectState: TypedUseSelectorHook<RootState> = useSelector;

export default reducers;
