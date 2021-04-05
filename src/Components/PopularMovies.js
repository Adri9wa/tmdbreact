import React, { useEffect, useState, Component } from 'react'
import MovieCard from './MovieCard'

export default function PopularMovies(){
    const [movies, setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=071635fb0b2b71f93557ffd362974c76&language=en-US&page=1`

useEffect(() => {
  async function fetchData() {
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results)
    } catch(err){
        console.error(err);
    }
  }
  fetchData();
}, []);

  return (
    <div>
        <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id}/>))}</div> 
    </div>

    
    );
}
