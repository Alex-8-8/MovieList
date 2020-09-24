import {
  SET_MOVIES,
  SET_IS_LOADING,
  SET_CURRENT_MOVIE, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE,
} from './constants';

const initialState = {
  isLoading: false,
  movies: [],
  currentMovie: null,
};

export const mainReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
      };
    default:
      return state;
  }
};
