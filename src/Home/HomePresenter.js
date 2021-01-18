import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Movie from "../Movie/Movie";
import Slide from "../Slide/Slide";
import "../default.css";
import "./Home.css";

const HomePresenter = ({ isLoading, movies, forSlider, error }) => (
  <section className="container">
    <>
    <Header />
    { isLoading 
      ? ( <div className="loader"><span className="loader_text">"Loading..." </span></div>
      ) : (   
          <>    
          <div className="movies">
            <Slide
              forSlider={forSlider}
            />                   
            <h3>Popular Movie</h3>
            <div className="movieBox">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.release_date && movie.release_date.substring(0, 4)}
                  title={movie.original_title}
                  poster={movie.poster_path}
                  rating={movie.vote_average}
                />
              ))}
            </div>
          </div>
          </>
        ) 
    }
    </>
  </section>
);

HomePresenter.propTypes = {
  isLoading: PropTypes.bool,
  movies: PropTypes.array,
  error: PropTypes.string
}
  
export default HomePresenter;


/* render() {
  const { isLoading, movies, error } = this.state;
  return (
    <section className="container">
      <>
      <Header />
      { isLoading 
        ? ( <div className="loader"><span className="loader_text">"Loading..." </span></div>
        ) : (              
            <div className="movies">
              <h3>Movie List by ranking</h3>
              <Link to={`/${movies.id}`}>
                <div className="movieBox">
                  {movies.map(movie => (
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                      rating={movie.rating}
                    />
                  ))}
                </div>
              </Link>
            </div>
          ) 
      }
      </>
    </section>
  );
}; */