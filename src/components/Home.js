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
    const { movies } = this.props;

    if (movies.length === 0) {
      return <Loader />;
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
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(Home);
