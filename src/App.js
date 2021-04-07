import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import TMDBLogo from './Assets/TMDb_Logo.png'
import './Components/SearchForm.css'


export default function App() {
  const [query, setQuery] = useState('');    //Query for Search form
  return (
      <header>
        <Link to="/popular"> 
        <img className="logo" src={TMDBLogo} alt="Logo"/>
        </Link>
        <p className="mainTitle">The Movie Database React app</p>

        <form className="form">
        <input type="text" name="query" placeholder="Enter name.."
        value={query} onChange={(e) => setQuery(e.target.value)}></input>

        <Link to={`/search/${query}`}>
        <button className="button" type="submit" onClick={() => setQuery("")}>Search</button>
        </Link>

    </form>
        </header>
    
    );
}