import {
  SET_MOVIES,
  SET_IS_LOADING,
  SET_CURRENT_MOVIE,
  SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_START, SEARCH_MOVIES_FAILURE
} from './constants';

export const setMoviesAC = movies => ({
  type: SET_MOVIES,
  payload: movies,
});

export const startLoadingAC = () => ({
  type: SET_IS_LOADING,
});

export const searchMoviesStart = () => ({
  type: SEARCH_MOVIES_START,
});

export const searchMoviesSuccess = movies => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: movies,
});

export const searchMoviesFailure = () => ({
  type: SEARCH_MOVIES_FAILURE,
});

export const setCurrentMovie = movie => ({
  type: SET_CURRENT_MOVIE,
  payload: movie,
});
