import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import MovieDetails from './MovieDetails'
import './MovieCard.css'


export default function MovieCard({ movie }){

    return (       

        <Link to={`/details/${movie.id}`}>
            <div className="card">
                    <img className="card--image"
                    src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                    alt ={movie.title + ' poster'}/>
                <div className="card--content">
                    <h3 className="card--title">{movie.title}</h3>
                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                    <p><small>RATING: {movie.vote_average}</small></p>
                </div>
            </div>
        </Link>
    )   

}
