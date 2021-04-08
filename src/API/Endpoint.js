
function Endpoint(){
}

export async function FetchMovies(url){
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;
        } catch(err){
            console.error(err);
        }
}

export async function FetchMoviesResults(url){
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
        } catch(err){
            console.error(err);
        }


}

export async function FetchGenres(url){
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data.genres;
    } catch(err){
            console.error(err);
    }
}

export async function FetchFilmGenres(url){
    try{
        const res = await fetch(url);
        const data = await res.json();
        const genres = data.genres;
        return genres;
    } catch(err){
            console.error(err);
    }
}

export async function MatchGenreIds(ids) {
    
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=071635fb0b2b71f93557ffd362974c76&language=en-US"
    try{
        const res = await fetch(url);
        const data = await res.json();
        const genres = data.genres;
        let arr = ids.map(g =>  genres.find(e => g === e.id)?.name)
    return arr;
    } catch(err){
        console.error(err);
    }  
}

export default Endpoint;