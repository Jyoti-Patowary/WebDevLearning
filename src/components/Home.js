import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  List,
  Paper,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";
import instance from "./axios";
import { useEffect, useState } from "react";
import requests from "./request";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.fetchTopRated).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movies);
  return (
    <div>
      <div>
        <div
          style={{
            // backgroundSize: "100% !important",
            // backgroundRepeat: "no-repeat !important",
            // backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            height: "90vh",
            background: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}) 100%`,
          }}
        />
        {/* <CardMedia
            component="img"
            height="500"
            image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </CardContent> */}
        {/* <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {movie?.title}
            </Typography>
          </CardContent>
        </CardActionArea> */}
      </div>
    </div>
  );
};

export default Home;
