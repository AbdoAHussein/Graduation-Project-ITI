import axios from "axios";
import { create } from "zustand";

const movieData = create((set) => ({
    movies: [],
    getMovies: async () => {
        let {data} = await axios.get(`https://cinemeta-catalogs.strem.io/top/catalog/movie/top.json`);
        set({
            movies: data.metas, 
        });
        return data.metas;
    },
}));

export default movieData;