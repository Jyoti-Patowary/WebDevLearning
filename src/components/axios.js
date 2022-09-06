import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=3666a25e61485ebf50f59fec841801e2"
})

export default instance; 