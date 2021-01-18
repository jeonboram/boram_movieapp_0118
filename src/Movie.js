import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie( { id, year, title, poster, rating }) {
  return (
    <Link to={`/${id}`}>
      <div className="movie">
        <img src={ `https://image.tmdb.org/t/p/w500${poster}` } alt={ title } title={ title }></img>
        <div className="cover"></div>
        <div className="movie_data">
          <h3 className="movie_title">{ title }</h3>
          <h5 className="movie_rating">❤️ { rating } / 10</h5>
          <h5 style={{display:"none"}}>{year}</h5>
          {/* <ul className="movie_genres">
            {genres.map((genre, index) => 
              <li className="each_genre" key={index}>{ genre }</li>
              )}
          </ul>
          <p className="movie_summary">{ summary }</p> */}
        </div>   
      </div>
    </Link>  
  )
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.string,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

export default Movie;