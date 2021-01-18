import React from "react";
import axios from "axios";
import Movie from "./Movie/Movie";
import Header from "./Header/Header";
import "./Home/Home.css";


class Upcoming extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data : { movies }}} = await axios.get("https://yts.mx/api/v2/movie_suggestions.json");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        <>
        <Header />
        { isLoading 
          ? ( <div className="loader"><span className="loader_text">"Loading..." </span></div>
          ) : (
              <div className="movies">
                <h3>Movies</h3>
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
              </div>
            ) 
        }
        </>
      </section>
    );
  };
};

export default Upcoming;