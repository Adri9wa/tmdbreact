import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails'
import Search from './Components/Search'
import PopularMovies from './Components/PopularMovies';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import Favorites from './Components/Favorites'

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
     return (
      promiseInProgress &&
      <div
      style={{
      width: "100%",
      height: "100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
      }}
      >
      <Loader type="ThreeDots" color="rgb(236, 6, 56)" height="100" width="100" />
      </div>
    );  
   }

ReactDOM.render(
  <Router>
      <Redirect from="/" to="/popular" />
      <Route path="/" component={App}/>
      <Route path="/popular" exact render={() => <PopularMovies />} />
      <LoadingIndicator/>
      <Route path="/search/:name" exact render={(props) => <Search {...props} />} />
      <Route path="/details/:id" render={props => <MovieDetails {...props} />}/>
      <Route path="/favorites" component={Favorites}/>
  </Router>
,
  document.getElementById('root')
);

