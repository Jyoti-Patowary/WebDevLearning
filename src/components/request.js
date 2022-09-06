const api_key = "3666a25e61485ebf50f59fec841801e2";

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=3666a25e61485ebf50f59fec841801e2&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_networks=213`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`
}

export default requests;