import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as IPayloadAction from './models';
import {initList} from '../base';

const initialState: IPayloadAction.IMovieState = {
  listMovie: initList,
  listFavorite: initList,
  listBooked: initList,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    saveListMovie: (
      state: IPayloadAction.IMovieState,
      action: PayloadAction<IPayloadAction.IActionSaveListMovie>,
    ) => {
      const {listMovie, loadMore} = action.payload;
      const movies: IPayloadAction.IMovie[] = [];
      listMovie.results.forEach((item: IPayloadAction.IMovie) => {
        const isBooked =
          state.listBooked.results.findIndex(movie => movie.id === item.id) !==
          -1;
        const isFavorite =
          state.listFavorite.results.findIndex(
            movie => movie.id === item.id,
          ) !== -1;
        movies.push({...item, isBooked: isBooked, isFavorite: isFavorite});
      });
      return {
        ...state,
        listMovie: {
          ...listMovie,
          results: loadMore
            ? [...state.listMovie.results, ...movies]
            : [...movies],
        },
      };
    },
    updateFavoriteMovie: (
      state: IPayloadAction.IMovieState,
      action: PayloadAction<IPayloadAction.IActionUpdateFavoriteMovie>,
    ) => {
      const {movie} = action.payload;
      const resultsFavorite = movie.isFavorite
        ? [movie, ...state.listFavorite.results]
        : state.listFavorite.results.filter(
            (item: IPayloadAction.IMovie) => item.id !== movie.id,
          );
      const resultsBooked = state.listBooked.results.map(
        (item: IPayloadAction.IMovie) => {
          return {
            ...item,
            isFavorite:
              movie.id === item.id ? movie.isFavorite : item.isFavorite,
          };
        },
      );
      const resultsMovie = state.listMovie.results.map(
        (item: IPayloadAction.IMovie) => {
          return {
            ...item,
            isFavorite:
              movie.id === item.id ? movie.isFavorite : item.isFavorite,
          };
        },
      );
      return {
        ...state,
        listBooked: {
          ...state.listBooked,
          results: resultsBooked,
        },
        listMovie: {
          ...state.listMovie,
          results: resultsMovie,
        },
        listFavorite: {
          ...state.listFavorite,
          results: resultsFavorite,
        },
      };
    },
    bookTicketMovie: (
      state: IPayloadAction.IMovieState,
      action: PayloadAction<IPayloadAction.IActionBookTicketMovie>,
    ) => {
      const {movie} = action.payload;
      const resultMovies = state.listMovie.results.map(
        (item: IPayloadAction.IMovie) => ({
          ...item,
          isBooked: movie.id === item.id ? true : item.isBooked,
        }),
      );
      const resultsFavorite = state.listFavorite.results.map(
        (item: IPayloadAction.IMovie) => ({
          ...item,
          isBooked: movie.id === item.id ? true : item.isBooked,
        }),
      );
      return {
        ...state,
        listMovie: {
          ...state.listMovie,
          results: resultMovies,
        },
        listFavorite: {
          ...state.listMovie,
          results: resultsFavorite,
        },
        listBooked: {
          ...state.listBooked,
          results: [{...movie, isBooked: true }, ...state.listBooked.results],
        },
      };
    },
  },
});

export const {saveListMovie, updateFavoriteMovie, bookTicketMovie} =
  movieSlice.actions;

export const {reducer} = movieSlice;
