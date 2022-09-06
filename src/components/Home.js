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
import { maxWidth } from "@mui/system";
import './Home.css'
import SwipeableTextMobileStepper from "./Carousel"
import MovieCard from "./MovieCard";




const Home = () => {
  const [movies, setMovies] = useState([]);
  const [carouselState, setcarouselState]=useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log("movie ", movie)

  const makeCarouseldata=(md)=>{
    let images=[]
    md.map((mddata)=>{
      const temp = {
          label:`${mddata.title}`,
          imgPath:`https://image.tmdb.org/t/p/original/${mddata.backdrop_path}`  
      }
  
      images.push(temp)
  })
  setcarouselState(images)
  }

  useEffect(() => {
    axios.get(requests.fetchTopRated).then((response) => {
      console.log("Hello",response);
      setMovies(response.data.results);
      console.log({movies})
      console.log("movie ")
      console.log("useeffect run")
      makeCarouseldata(response.data.results);
      
    });
  }, []);

  console.log(movies);
  console.log({carouselState})
  
  return (
    <div className="Mb">
      <div className="WebsiteTitleConatiner">
        <h1 className="websiteTitle">SETFLIX</h1>
      </div>
      <div className="carousel-box">
        <SwipeableTextMobileStepper md={carouselState} /> 
      </div>
      <div className="movvert">      
      {movies.map((movie)=>{
        return(
          <MovieCard movie={movie} titleNetflix="netflix title"/>
        );
      })}
    </div>
    </div>
  );
};

export default Home;
