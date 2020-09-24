import {
  startLoadingAC,
  setMoviesAC,
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
  setCurrentMovie,
} from '../redux/actionCreators';

export const BASE_URL = 'http://localhost:5000/';

export function loadMovies() {

  return async(dispatch) => {
    dispatch(startLoadingAC());
    const response = await fetch(BASE_URL);

    dispatch(setMoviesAC(await response.json()));
  };
}

export function loadCurrentMovie(id) {

  return async(dispatch) => {
    dispatch(startLoadingAC());
    const response = await fetch(`${BASE_URL}movie/${id}`);

    dispatch(setCurrentMovie(await response.json()));
  };
}

export function searchMoviesTitle(substring) {
  return async(dispatch) => {
    dispatch(searchMoviesStart());
    const response = await fetch(`${BASE_URL}searchTitle/${substring}`);
    const data = await response.json();

    if (data.length) {
      dispatch(searchMoviesSuccess(data));
    } else {
      dispatch(searchMoviesFailure(data.error));
    }
  };
}

export function searchMoviesName(substring) {
  return async(dispatch) => {
    dispatch(searchMoviesStart());
    const response = await fetch(`${BASE_URL}searchName/${substring}`);
    const data = await response.json();

    if (data.length) {
      dispatch(searchMoviesSuccess(data));
    } else {
      dispatch(searchMoviesFailure(data.error));
    }
  };
}

export function sortMovies() {
  return async(dispatch) => {
    const response = await fetch(`${BASE_URL}sortName/`);
    const data = await response.json();

    if (data.length) {
      dispatch(searchMoviesSuccess(data));
    } else {
      dispatch(searchMoviesFailure(data.error));
    }
  };
}

export const addMovie = (movie) => {
  return fetch(`${BASE_URL}add`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
};

export function deleteMovie(id) {
  return async(dispatch) => {
    dispatch(startLoadingAC());
    const response = await fetch(`${BASE_URL}delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    dispatch(setMoviesAC(await response.json()));
  };
}