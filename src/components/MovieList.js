import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./MovieList.css";
import MovieThumb from "./MovieThumb";

class MovieList extends Component {
  renderMovies() {
    const { movies } = this.props;

    return movies.map((movie, i) => {
      let { id } = movie;
      return (
        <div className="col-6 col-md-4 col-lg-3" key={i}>
          <Link to={`/movie-detail/${id}`}>
            <MovieThumb
              title={movie.title}
              releaseDate={movie.release_date}
              poster={movie.poster_path}
              rating={movie.vote_average * 10}
            />
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="MovieList">
        <div className="container">
          <div className="row ">
            <h3>Popular Movies</h3>
          </div>
          <div className="row content no-gutters">{this.renderMovies()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps)(MovieList);
