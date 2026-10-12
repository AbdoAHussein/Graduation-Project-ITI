import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { WatchListContext } from "../../context/AppContext";

export default function WatchList() {
    const { watchList, removeFromWatchList } =useContext(WatchListContext);

    return (
        <>
        <div className="container py-5">
            <h2 className="text-white mb-4">My WatchList ❤️</h2>

        {watchList.length === 0 ? (<div className="text-center py-5">
            <h4 className="text-secondary">Your WatchList is empty</h4>
            <Link to="/moveList" className="btn btn-danger mt-3">
                Explore Movies
            </Link>
            </div>
        ) : (
            <div className="row g-4">
            {watchList.map((movie) => (
                <div className="col-6 col-md-4 col-lg-3" key={movie.id}>
                <div className="card bg-dark text-white h-100">
                    <Link to={`/movie/${movie.id}`}><img src={movie.poster} alt={movie.name} className="card-img-top"style={{
                        height: "300px",
                        objectFit: "cover",
                        }}/></Link>

                    <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        {movie.name}
                    </h5>

                    <button className="btn btn-outline-danger mt-auto" onClick={() => removeFromWatchList(movie.imdb_id)}>Remove </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
        </>
    );
}



