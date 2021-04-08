import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import SadFace from '../Assets/sad_face.png'


export default function Favorites(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
  setMovies(Object.values(localStorage))
}, []);

  if(localStorage.length === 0) return (
    <>
    <p className="emptyMsg">It seems you favorites list is empty..</p>
    <img className="sadFace" src={SadFace} alt="Sad Face"/>
    </>
  )
    else
  return(
    
    <div className="card-list">{movies.map(movie => (
      <MovieCard movie={JSON.parse(movie)} key={JSON.parse(movie).id}/>))}
      </div>
  )

}