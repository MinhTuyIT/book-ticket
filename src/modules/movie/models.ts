import { IActionCallback, Pagination } from '../base';
export const ROOT_MODULE = 'movie';
export interface IMovie {
  id: number;
  title: string;
  category: string;
  rate: number;
  numberRates: number;
  duration: string;
  description: string;
  thumbnail: string;
  showTimes: string[];
  isFavorite: boolean;
  isBooked: boolean;
}

export interface IMovieState {
  listMovie: Pagination<IMovie>;
  listFavorite: Pagination<IMovie>;
  listBooked: Pagination<IMovie>;
}

// Action Saga
export const GET_LIST_MOVIE = `${ROOT_MODULE}/GET_LIST_MOVIE`;
export const UPDATE_FAVORITE_MOVIE = `${ROOT_MODULE}/UPDATE_FAVORITE_MOVIE`;
export const BOOK_TICKET_MOVIE = `${ROOT_MODULE}/BOOK_TICKET_MOVIE`;

export interface IActionGetListMoviesPayload extends IActionCallback {
  page?: number;
  limit?: number;
}

export interface IActionGetListMoviesPayload extends IActionCallback {
  page?: number;
  limit?: number;
}

export interface IActionGetListMoviesPayload extends IActionCallback {
  page?: number;
  limit?: number;
}

export interface IActionSaveListMovie {
  listMovie: Pagination<IMovie>;
  loadMore: boolean;
}

export interface IActionUpdateFavoriteMovie {
  movie: IMovie;
}

export interface IActionBookTicketMovie {
  movie: IMovie;
}

