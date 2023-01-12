import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";


const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    const base_img_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

    }, [fetchUrl])

    return (
        <div className="mb-4">
            <h2 className="text-white text-lg md:text-2xl font-semibold">{title}</h2>
            <div className="flex space-x-4 overflow-y-hidden overflow-x-auto p-5 scrollbar-hide">
                {movies.map((movie, index) => (
                    ((isLargeRow && movie.poster_path) || 
                    (!isLargeRow && movie.backdrop_path)) && 
                    (<img 
                        key={index}
                        className={`${isLargeRow ? 'max-h-[300px] md:max-h-[400px] hover:scale-110' : 'max-h-[200px] md:max-h-[300px] hover:scale-105'} cursor-pointer object-contain  transition-transform easein`}
                        src={`${base_img_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        alt={`${movie.name}`} 
                    />)
                ))}
            </div>
        </div>
    );
}
 
export default Row;