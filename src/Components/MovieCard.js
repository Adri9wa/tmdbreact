import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MatchGenreIds, FetchFilmGenres } from '../API/Endpoint'
import './MovieCard.css'
import EmptyHeart from '../Assets/empty_heart.png'
import FullHeart from '../Assets/full_heart.png'



export default function MovieCard({ movie }){
    //Get Genre List on every card, might be not effective :\
    const [genres, setGenres] = useState([]);
    const [favorite, setFavorite] = useState();
    const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=071635fb0b2b71f93557ffd362974c76&language=en-US`

   useEffect(()=>{
       //Use genres depending on property
       if(movie.hasOwnProperty("genre_ids")) MatchGenreIds(movie.genre_ids).then(result => setGenres(result)) //Genres from card
        else {
            FetchFilmGenres(url).then(result => setGenres(result)) //Genres from details
        }
    }, [movie, url])

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

    const CheckFavorite = () => {
        if (localStorage.getItem(movie.id) === null) setFavorite(false)
        else setFavorite(true)
    }

    const getIMG = () => favorite ? FullHeart : EmptyHeart
    
    const IMGPath = getIMG(); //Set Image src

    return (       
            <div className="card" onMouseEnter={CheckFavorite}>
                    <img className="card--image"
                    src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                    alt ={movie.title + ' poster'}/>
                <div className="card--content">
                <img className="favoriteImg" src={IMGPath} onClick={ChangeFavoriteState} alt="heart"/>
                <Link onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} to={`/details/${movie.id}`}>

                    <p className="card--rating">{movie.vote_average}</p>
                    <h3 className="card--title">{movie.title}</h3>
                    <p className="card--genres"> Genres: {genres.map( genre => (genre.name === undefined) ? genre+" | " : genre.name+" | ")}</p>
                    <p><small>Release date: {movie.release_date}</small></p>
                    </Link>

                </div>

            </div>
    )   

}
