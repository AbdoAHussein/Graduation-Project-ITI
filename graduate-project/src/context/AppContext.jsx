
import React, { createContext, useState } from "react";
export const WatchListContext = createContext();

export default function WatchListProvider({ children }) {
    const [watchList, setWatchList] = useState([]);

    function addToWatchList(movie) {
    const exists = watchList.find(
        (item) => item.imdb_id === movie.imdb_id
    );

    if (exists) return;

    setWatchList([...watchList, movie]);
}


    function removeFromWatchList(movieId) {
        setWatchList(
            watchList.filter((movie) => movie.imdb_id !== movieId)
        );
    }

    return (
        <>
            <WatchListContext.Provider
                value={{
                    watchList,
                    addToWatchList,
                    removeFromWatchList,
                }}
            >
                {children}
            </WatchListContext.Provider>
        </>
    );
}
