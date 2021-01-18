import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Movie from "../Movie";
import "./Home.css";

const HomePresenter = ({ isLoading, movies, movies2, movies3, movies4, movies5, moviesTotal, show, error }) => (
  <section className="container">
    <>
    <Header />
    { isLoading 
      ? ( <div className="loader"><span className="loader_text">"Loading..." </span></div>
      ) : (              
          <div className="movies">
            <h3>Popular Movie</h3>
            <div className="movieBox">
              {show.map(show => (
                <Movie
                  key={show.id}
                  id={show.id}
                  year={show.release_date && show.release_date.substring(0, 4)}
                  title={show.original_title}
                  poster={show.poster_path}
                  rating={show.vote_average}
                />
              ))}
            </div>
          </div>
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