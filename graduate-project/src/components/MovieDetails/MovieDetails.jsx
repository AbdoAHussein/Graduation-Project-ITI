
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import movieData from "../../data/data";
import { WatchListContext } from "../../context/AppContext";

export default function MovieDetails() {
    const { id } = useParams();
    const { movies, getMovies } = movieData();

    const {
        watchList,
        addToWatchList,
        removeFromWatchList
    } = useContext(WatchListContext);

    useEffect(() => {
        if (movies.length === 0) {
            getMovies();
        }
    }, [movies.length, getMovies]);

    const movie = movies.find(
        (item) => item.imdb_id === id
    );

    const isAdded = watchList.find(
        (item) => item.imdb_id === id
    );

    if (movies.length === 0) {
        return (
            <div className="details-message">
                <div className="spinner-border text-danger" />
                <h4>Loading movie details...</h4>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="details-message">
                <h2>Movie Not Found</h2>
                <Link to="/moveList" className="btn btn-danger">Back to Movies</Link>
            </div>
        );
    }

    function handleWatchList() {
        if (isAdded) {
            removeFromWatchList(movie.imdb_id);
        } else {
            addToWatchList(movie);
        }
    }

    
return (
    <>
        <div className="movie-details-page">
            <div className="details-hero"style={{backgroundImage: `linear-gradient(90deg,rgba(12,12,16,.97),rgba(12,12,16,.75)),url("${movie.poster}")`}}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-12 col-md-4">
                            <img src={movie.poster} alt={movie.name} className="details-poster"/>
                        </div>
                        <div className="col-12 col-md-8">
                            <span className="details-label">CINEZONE</span>
                            <h1 className="details-title">{movie.name}</h1>
                            <div className="details-meta">
                                <span>{movie.releaseInfo || "Year unavailable"}</span>
                                <span>•</span>
                                <span>Movie</span>
                            </div>
                            <h3 className="overview-heading">Storyline</h3>
                            <p className="details-overview">{movie.description ||movie.overview ||"No overview available for this movie."}</p>
                            <div className="details-actions">
                                <button type="button" className={`btn ${isAdded? "btn-outline-danger": "btn-danger"}`}onClick={handleWatchList}>
                                    {isAdded
                                        ? "♥ Remove from WatchList"
                                        : "♡ Add to WatchList"}
                                </button>
                                <Link to="/moveList" className="btn btn-outline-light">Back to Movies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

}
