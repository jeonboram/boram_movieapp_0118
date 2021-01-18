import React from "react";
import { movieApi } from "api";
import HomePresenter from "./HomePresenter";
import "./Home.css";

export default class extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    movies2: [],
    movies3: [],
    movies4: [],
    movies5: [],
    moviesTotal: [],
    items: 20,
    preItems: 0,
    show: [],
    error: null
  };

  getMovies = async () => {
    try {
      const { data: { results : movies }} = await movieApi.movie();  
      const { data: { results : movies2 }} = await movieApi.movie2();
      const { data: { results : movies3 }} = await movieApi.movie3();
      const { data: { results : movies4 }} = await movieApi.movie4();
      const { data: { results : movies5 }} = await movieApi.movie5();
      const moviesTotal = Array.of( ...movies, ...movies2, ...movies3, ...movies4, ...movies5 );
      const result = moviesTotal.slice(this.state.preItems, this.state.items);
      this.setState({ movies, movies2, movies3, movies4, movies5, moviesTotal, show: [...this.state.show, ...result], isLoading: false });
      window.addEventListener('scroll', this.infiniteScroll, true);
    } catch {
      this.setState({ error: "Can't find Movie information"})
    } finally {
      this.setState({ isLoading: false })
    }
  }
    
  componentDidMount() {
    this.getMovies();
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;
    
    if(scrollTop + clientHeight >= scrollHeight ) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items+20
      })
      this.componentDidMount();
    }
  }

  render() {
    const { isLoading, movies, movies2, movies3, movies4, movies5, moviesTotal, show, error } = this.state;
    return (
      <HomePresenter 
        movies={movies}
        movies2={movies2}
        movies3={movies3}
        movies4={movies4}
        movies5={movies5}
        moviesTotal={moviesTotal}
        show={show}
        isLoading={isLoading}
        error={error}
      />
    );
  };
};
