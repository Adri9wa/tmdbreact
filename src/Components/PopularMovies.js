import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import InfiniteScroll from 'react-infinite-scroller'
import qs from 'qs'

export default function PopularMovies(){
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState([]);
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=071635fb0b2b71f93557ffd362974c76&language=en-US&`

useEffect(() => {
  handleLoadMore({page: 1})
}, []);

  function handleLoadMore(page){
    const strParams = qs.stringify(page);
    if(strParams){
      url = url+strParams;
    }    
    fetch(url)
      .then((res) => res.json())
      .then((res) => {

        let newArray = movies.concat(res.results);
        setMovies(newArray);
        setPage(res.page);
      })
      .catch(err => console.log(err));
  }

  return (
    
    <div>
      <InfiniteScroll //Implemented infinite scroll
      className="card-list"
      pageStart={0}
      loadMore={() => handleLoadMore({ page: page+1 })}
      hasMore={true || false}
      useWindow={true}
      >
        
        {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id}/>))}
        
      </InfiniteScroll>
    </div>

    );
}
