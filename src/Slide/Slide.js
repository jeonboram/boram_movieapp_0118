import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";

export default function MovieSlider({ forSlider }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(forSlider);
  return (
    <Slider {...settings } >
      <Link to={`/${forSlider[0].id}`}>
        <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[0].poster_path}` } alt={ forSlider[0].title } title={ forSlider[0].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[0].original_title}</h4>
            <h5>{forSlider[0].release_date.substring(0, 4)}  |  ❤️ { forSlider[0].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>
      <Link to={`/${forSlider[1].id}`}>
        <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[1].poster_path}` } alt={ forSlider[1].title } title={ forSlider[1].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[1].original_title}</h4>
            <h5> {forSlider[1].release_date.substring(0, 4)}  |  ❤️ { forSlider[1].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>
      <Link to={`/${forSlider[2].id}`}>
        <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[2].poster_path}` } alt={ forSlider[2].title } title={ forSlider[2].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[2].original_title}</h4>
            <h5> {forSlider[2].release_date.substring(0, 4)}  |  ❤️ { forSlider[2].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>
      <Link to={`/${forSlider[3].id}`}>
        <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[3].poster_path}` } alt={ forSlider[3].title } title={ forSlider[3].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[3].original_title}</h4>
            <h5> {forSlider[3].release_date.substring(0, 4)}  |  ❤️ { forSlider[3].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>
      <Link to={`/${forSlider[4].id}`}>
        <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[4].poster_path}` } alt={ forSlider[4].title } title={ forSlider[4].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[4].original_title}</h4>
            <h5> {forSlider[4].release_date.substring(0, 4)}  |  ❤️ { forSlider[4].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>
      <Link to={`/${forSlider[5].id}`}>
        <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[5].poster_path}` } alt={ forSlider[5].title } title={ forSlider[5].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[5].original_title}</h4>
            <h5> {forSlider[5].release_date.substring(0, 4)}  |  ❤️ { forSlider[5].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>
      <Link to={`/${forSlider[6].id}`}>
        <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[6].poster_path}` } alt={ forSlider[6].title } title={ forSlider[6].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[6].original_title}</h4>
            <h5> {forSlider[6].release_date.substring(0, 4)}  |  ❤️ { forSlider[6].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>
      <Link to={`/${forSlider[7].id}`}>
       <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[7].poster_path}` } alt={ forSlider[7].title } title={ forSlider[7].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[7].original_title}</h4>
            <h5> {forSlider[7].release_date.substring(0, 4)}  |  ❤️ { forSlider[7].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>
      <Link to={`/${forSlider[8].id}`}>
        <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[8].poster_path}` } alt={ forSlider[8].title } title={ forSlider[8].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[8].original_title}</h4>
            <h5> {forSlider[8].release_date.substring(0, 4)}  |  ❤️ { forSlider[8].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>
      <Link to={`/${forSlider[9].id}`}>
        <div>
          <img src={ `https://image.tmdb.org/t/p/w500${forSlider[9].poster_path}` } alt={ forSlider[9].title } title={ forSlider[9].title }></img>
          <span className="dark"></span>
          <div className="text">
            <h4>{forSlider[9].original_title}</h4>
            <h5> {forSlider[9].release_date.substring(0, 4)}  |  ❤️ { forSlider[9].vote_average } / 10 </h5>
          </div>
        </div>
      </Link>   
    </Slider>
  );
};

MovieSlider.propTypes = {
  forSlider: PropTypes.array
}