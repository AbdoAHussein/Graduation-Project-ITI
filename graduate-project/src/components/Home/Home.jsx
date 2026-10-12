
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import movieData from "../../data/data";
import MovieCard from "../../components/MovieCard/MovieCard";
import { WatchListContext } from "../../context/AppContext";

export default function Home() {
    const { movies, getMovies } = movieData();
    const { addToWatchList } = useContext(WatchListContext);
    useEffect(() => {
        if (movies.length === 0) {
            getMovies();
        }
    }, [movies.length, getMovies]);
    return (
        <>
            <div className="home-page">
                <div className="home-hero">
                    <div className="container">
                        <div className="hero-content">
                            <span className="hero-label">WELCOME TO CINEZONE</span>
                            <h1>Discover Your Next<span> Favorite Movie</span></h1>
                            <p>
                                Explore trending movies, discover new stories,
                                and save your favorites to your WatchList.
                            </p>
                            <Link to="/moveList"className="btn btn-danger btn-lg mt-3">Explore Movies</Link>
                        </div>
                    </div>
                </div>
                {/* Trending Movies */}
                <div className="container py-5">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                        <h2 className="home-section-title mb-0">Trending Movies</h2>
                        <Link to="/moveList"className="btn btn-outline-danger">View All</Link>
                    </div>
                    <div className="row g-3">
                        {movies.slice(0, 8).map((movie) => (
                            <MovieCard
                                key={movie.imdb_id}
                                movie={movie}
                                addToWatchList={addToWatchList}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

