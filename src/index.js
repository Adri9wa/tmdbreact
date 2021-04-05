import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails'
import Search from './Components/Search'
import PopularMovies from './Components/PopularMovies';

ReactDOM.render(
  <Router>
    <Redirect to="/popular" />
      <Route path="/" component={App}/>
      <Route path="/popular" exact component={PopularMovies} />
      <Route path="/details/:id" render={props => <MovieDetails {...props} />}/>
      <Route path="/search/:name" component={Search} />
  </Router>
,
  document.getElementById('root')
);

