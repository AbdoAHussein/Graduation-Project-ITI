
import movieData from '../../data/data'
import React, { useEffect, useContext } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { WatchListContext } from "../../context/AppContext";
export default function ShowMovies() {
    let {movies, getMovies} = movieData();
    useEffect(()=>{
        getMovies();
    }, [])
    const { addToWatchList } = useContext(WatchListContext);
    return (
        <>
            <h2 className='text-center my-3 p-3 bg-dark text-light text-uppercase'>Movie List</h2>
            <div className="container">
                <div className="row g-3">
                    {movies.map((movie) => <MovieCard movie={movie} key={movie.imdb_id} addToWatchList={addToWatchList}/>)}
                </div>
            </div>
        </>
    )
}

