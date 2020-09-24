import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { addMovie } from '../../api/loadMovies';

export const AddMovie = () => {
  const { register, handleSubmit } = useForm({});
  const history = useHistory();

  const submitHandler = handleSubmit(async(data) => {
    await addMovie(data);
    history.push('/');
  });

  return (
    <div className="container">
      <div className="mt-3">
        <h3 className="mb-4"> Create Todo Item </h3>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="title">
              Title:
            </label>
            <input className="form-control" ref={register} type="text" name="title" id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="releaseYear">
              Release Year:
            </label>
            <input className="form-control" ref={register} type="number" name="releaseYear" id="releaseYear" />
          </div>
          <div className="form-group">
            <label htmlFor="format">
              Format:
            </label>
            <input className="form-control" ref={register} type="text" name="format" id="format" />
          </div>
          <div className="form-group">
            <label htmlFor="stars">
              Stars:
            </label>
            <input className="form-control" ref={register} type="text" name="stars" id="stars" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Save Todo</button>
          </div>
        </form>
      </div>
    </div>
  );
};
