import React, { useEffect, useState } from 'react';
import './Details.css'
import MovieCard from './MovieCard'
import {FetchMovies, FetchMoviesResults} from '../API/Endpoint'
import { trackPromise } from 'react-promise-tracker';
import EmptyHeart from '../Assets/empty_heart.png'
import FullHeart from '../Assets/full_heart.png'

export default function MovieDetails(props){
   const { id } = props.match.params;
   const url = `https://api.themoviedb.org/3/movie/${id}?api_key=071635fb0b2b71f93557ffd362974c76&language=en-US`
   const recomUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=071635fb0b2b71f93557ffd362974c76&language=en-US&page=1`;
   const [movie, setMovie] = useState([]);
   const [recoms, setRecoms] = useState([]);
   const [favorite, setFavorite] = useState();

   //Get Movie Details Data
   useEffect(() => {
     trackPromise(
     FetchMovies(url).then(data => {
       data && setMovie(data)
     })
   )
    }, [url]);

//Get Recommendations
    useEffect(() => {
      trackPromise(
      FetchMoviesResults(recomUrl).then(data => {
        data && setRecoms(data)
      })
      )

    if (localStorage.getItem(id) === null) setFavorite(false)  
    else setFavorite(true)

    }, [recomUrl, id]);

    const ChangeFavoriteState = () => {
      if (localStorage.getItem(movie.id) === null){
          localStorage.setItem(movie.id, JSON.stringify(movie));
          setFavorite(true);
      }
      else {
          localStorage.removeItem(movie.id);
          setFavorite(false);
      }
  }
  const getIMG = () => favorite ? FullHeart : EmptyHeart
    
  const IMGPath = getIMG();

    return (
      //Movie Details
       <>
   <div className="filmDetails">
      <img className="film--image" src = {`http://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="Poster"/>
      <div className="film--info">
         <p className="film--title">{movie.title} </p>
         <p className="film--originalTitle">{movie.original_title} </p>
         <p className="film--runtime">Length: {movie.runtime} minutes</p>  
         <img className="film--favoriteImg" src={IMGPath} onClick={ChangeFavoriteState} alt="heart"/>
       
         <div className="column">
         <div className="film--rating">{movie.vote_average}</div>
         <p className="film--overview">{movie.overview}</p>
         </div>
         <p className="film--release">Released on: {movie.release_date}</p>
      </div>

      
   </div> 
   <h1 className="film--originalTitle">Recommendations:</h1>
   <div className="film--recommendations">
     {/*Recommendation Cards */}
        <div className="card-list">
        {recoms.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id}/>))}</div> 
    </div>
   </>
   );
    
}