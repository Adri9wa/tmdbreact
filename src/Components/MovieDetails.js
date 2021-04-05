import React, { useEffect, useState } from 'react';
import './Details.css'

function MovieDetails(props){

   const { id } = props.match.params;
   console.log(id)
   const url = `https://api.themoviedb.org/3/movie/${id}?api_key=071635fb0b2b71f93557ffd362974c76&language=en-US`
   const [movie, setMovie] = useState([]);


   useEffect(() => {
      async function fetchData() {
          try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovie(data)
        } catch(err){
            console.error(err);
        }
      }
      fetchData();
    }, []);

   
    return (
   <div className="filmDetails">
      <img className="film--image" src = {`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <div className="film--info">
         <div className="film--title">{movie.title} </div>
         <div className="film--originalTitle">{movie.original_title} </div>
         <div className="film--rating">{movie.vote_average}</div>
         <div className="film--overview">{movie.overview}</div>
      </div>
   </div> 
   );
    
}

export default MovieDetails;