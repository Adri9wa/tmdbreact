import React, {useState} from 'react';
import MovieCard from './MovieCard';
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom'


export default function Search(){
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async(e) => {

        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=071635fb0b2b71f93557ffd362974c76&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results)
        } catch(err){
            console.error(err);
        }
    }


return(
    <>
    <form className="form" onSubmit={searchMovies}>
        <input type="text" name="query" placeholder="Enter name.."
        value={query} onChange={(e) => setQuery(e.target.value)}></input>

        <Link to={`/search/${query}`}>
        <button className="button" type="submit" onClick={searchMovies}>Search</button>
        </Link>
    </form>
    <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id}/>
        ))}
    </div>
    </>
);
}