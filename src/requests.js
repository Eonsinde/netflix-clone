const API_KEY="d7b262102963c6201446dc4087488ff2";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discovery/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;