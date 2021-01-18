import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../Header";
import "./detail.css";


const DetailPresenter = ({ isLoading, results, error }) => (
  <section className="container">
    <>
    <Header />
    { isLoading 
      ? (
      <>
      <Helmet><title>Loading || Ramflix </title></Helmet>
      <div className="loader"><span className="loader_text">"Loading..." </span></div>
      </>
      ) : (              
          <div className="DetailSection">
            <Helmet><title>{ results.original_title }</title> || Ramflix </Helmet>
            <img src={`https://image.tmdb.org/t/p/original${results.backdrop_path}`}></img>
            <span></span>
            <div className="content">
              <img src={`https://image.tmdb.org/t/p/original${results.poster_path}`}></img>             
              <div className="data">
                <h3>{`${results.original_title}`}</h3>
                <span>{`${results.release_date}`} | </span>
                <span>{`${results.runtime}`} min | </span>
                <span>
                  {results.genres && 
                    results.genres.map((genre, index) => 
                      index === results.genres.length - 1 ? genre.name : `${genre.name} / `
                    )
                  }
                </span>
                <p>{ results.overview }</p>
              </div>
            </div>
          </div>
        ) 
    }
    </>
  </section>
);

DetailPresenter.propTypes = {
  isLoading: PropTypes.bool,
  results: PropTypes.array,
  error: PropTypes.string,
}
  
export default DetailPresenter;