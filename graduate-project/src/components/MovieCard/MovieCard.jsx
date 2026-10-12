import { Link } from "react-router-dom";

export default function MovieCard({ movie, addToWatchList }) {
    
    return (
        <>
            <div className="col-6 col-md-4 col-lg-3">
                <div className="card h-100" style={{width: `18rem`}}>
                    <div className="card-body">
                        <img src={movie.poster} className="card-img" alt={movie.name} style={{objectFit: `cover`}} />
                        <h5 className="mt-2 mb-0">{movie.name}</h5>
                        <p className="card-text fg-2">{movie.releaseInfo}</p>
                        <div className='card-buttons'>
                            <Link to={`/movie/${movie.imdb_id}`} className="btn btn-outline-danger mt-2 w-100">View Details</Link>
                            <button className="btn btn-danger" onClick={() =>  addToWatchList(movie)}> Add to WatchList ♡</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
