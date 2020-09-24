import React, { useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLoadCurrentMovie } from '../../redux/actionCreators';
import { loadCurrentMovie } from '../../api/loadMovies';
import './MovieItem.scss';

const MovieItem = ({
  currentMovie,
  loadCurrentMovie,
}) => {
  const match = useRouteMatch();

  useEffect(() => {
    loadCurrentMovie(match.params.id);
  }, []);

  return (

    <div className="container">
      <div className="movie-item mt-5">
        <h3 className="movie-item__title mb-4">
          Movie Name:
          {!currentMovie ? '' : <span>{` ${currentMovie.title}`}</span>}
        </h3>
        <p className="movie-item__release-date mb-3">
          Realease Date:
          {!currentMovie ? '' : <span>{` ${currentMovie.releaseYear}`}</span>}
        </p>
        <p className="movie-item__format mb-3">
          Format:
          {!currentMovie ? '' : <span>{` ${currentMovie.format}`}</span>}
        </p>
        <p className="movie-item__stars mb-3">
          Stars:
          {!currentMovie ? '' : <span>{` ${currentMovie.stars}`}</span>}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.mainReducer.movies,
  currentMovie: state.mainReducer.currentMovie,
});

const mapDispatchToProps = dispatch => ({
  loadCurrentMovie: id => dispatch(loadCurrentMovie(id)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(MovieItem);

export { Enhanced as MovieItem };