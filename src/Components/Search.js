import React, {useState, useEffect} from 'react';
import { trackPromise } from 'react-promise-tracker';
import { FetchMoviesResults } from '../API/Endpoint';
import MovieCard from './MovieCard';

 export default function Search(props){

    const keyword = props.match.params.name;
    const [movies, setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=071635fb0b2b71f93557ffd362974c76&language=en-US&query=${keyword}&page=1&include_adult=false`;

    useEffect(() => {
        trackPromise(
        FetchMoviesResults(url).then(data => {
            data && setMovies(data)
          })
        )
      }, [url]);

return(
    <>
    <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id}/>
        ))}
    </div>
    </>
);
}