import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { MovieList } from './components/MovieList/MovieList';
import { MovieItem } from './components/MovieItem/MovieItem';
import { AddMovie } from './components/AddMovie/AddMovie';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light px-5">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="navbar__link mr-3">Movies</Link>
          </li>
          <li className="navbar-item">
            <Link to="/add" className="navbar__link">Add Movie</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movie/:id" component={MovieItem} />
        <Route exact path="/add" component={AddMovie} />
      </Switch>
    </div>
  );
}

export default App;
