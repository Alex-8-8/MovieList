import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.scss';
import {
  loadMovies,
  deleteMovie,
  searchMoviesTitle,
  searchMoviesName,
  // loadCurrentMovie,
} from '../../api/loadMovies';
import { SearchInput } from '../SearchInput/SearchInput';

const MovieList = ({
  movies,
  loadMovies,
  deleteMovie,
  searchMoviesTitle,
  searchMoviesName
}) => {
  useEffect(() => {
    loadMovies();
  }, []);

  const handleDelete = (id) => {
    deleteMovie(id);
  };

  const onInputByNameChanged = (e) => {
    if (!e.target.value) {
      loadMovies();

      return;
    }

    searchMoviesName(e.target.value);
  };

  const onInputByTitleChanged = (e) => {
    if (!e.target.value) {
      loadMovies();

      return;
    }

    searchMoviesTitle(e.target.value);
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3 className="mb-4">Movie List</h3>
        <div className="search-input-block">
          <SearchInput onInputChange={onInputByTitleChanged} searchTitle="Search by title" />
          <SearchInput onInputChange={onInputByNameChanged} searchTitle="Search by actor name" />
        </div>
        {movies.length > 0 ? (
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th className="movie-row__cell">Movie Name</th>
                <th className="movie-row__cell">Release Year</th>
                <th className="movie-row__cell" />
              </tr>
            </thead>
            <tbody className="table-body">
              {movies.map((movie) => (
                <tr className="movie-row" key={movie._id}>
                  <td className="movie-row__cell w-50">{movie.title}</td>
                  <td className="movie-row__cell">
                    {movie.releaseYear}
                  </td>
                  <td className="movie-row__cell">
                    <Link
                      className="movie-row__link"
                      to={`/movie/${movie._id}`}
                    >
                      Show more
                    </Link>
                    <button
                      onClick={() => handleDelete(movie._id)}
                      type="button" 
                      className="btn btn-sm btn-danger movie-row__button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Movies are not found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.mainReducer.movies,
  isLoaded: state.mainReducer.isLoaded,
  isLoading: state.mainReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(loadMovies()),
  deleteMovie: id => dispatch(deleteMovie(id)),
  searchMoviesTitle: value => dispatch(searchMoviesTitle(value)),
  searchMoviesName: value => dispatch(searchMoviesName(value)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(MovieList);

export { Enhanced as MovieList };
