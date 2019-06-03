import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";

import Header from "./Header";
import MovieList from "./MovieList";
import Loader from "./Loader";

class Home extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies, error } = this.props;

    if (movies.length === 0) {
      setTimeout(() => {});
      return <Loader />;
    } else if (error.err) {
      return (
        <div className="Home">
          <Header />
          <p>Sorry. Nothing matches that search. Please try again.</p>
        </div>
      );
    } else {
      return (
        <div className="Home">
          <Header />
          <MovieList />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(Home);
