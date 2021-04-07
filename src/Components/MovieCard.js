import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MatchGenreIds } from '../API/Endpoint'
import './MovieCard.css'


export default function MovieCard({ movie }){
    //Get Genre List on every card, might be not effective :\
    const [genres, setGenres] = useState([]);
    useEffect(()=>{
        MatchGenreIds(movie.genre_ids).then(result => setGenres(result))
    }, [])

    return (       
        <Link onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} to={`/details/${movie.id}`}>
            <div className="card">
                    <img className="card--image"
                    src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                    alt ={movie.title + ' poster'}/>
                <div className="card--content">
                    <p className="card--rating">{movie.vote_average}</p>
                    <h3 className="card--title">{movie.title}</h3>
                    <p className="card--genres"> Genres: {genres.map(name => name +" | ")}</p>
                    <p><small>Release date: {movie.release_date}</small></p>

                </div>
            </div>
        </Link>
    )   

}
