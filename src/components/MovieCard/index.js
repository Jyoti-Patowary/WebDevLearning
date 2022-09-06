import './index.css'

const MovieCard = (props)=>{
    // console.log("Movie card props ",props.movie.adult)
    // console.log("title ",props.titleNetflix)
    return(
        <div>
            <h3>Movie Detail</h3>
            <div className="card-container">
            <div className="card-second">
            <img style={{height:'auto',maxWidth:'100vw'}} src={`https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}`} alt="ming"/>
            <div className="title-text">{props.movie?.original_title}</div>
            </div>
          </div>
        </div>
    )
}

export default MovieCard

