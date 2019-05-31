import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MovieList.css";
import MovieThumb from "./MovieThumb";

class MovieList extends Component {
  render() {
    return (
      <div className="MovieList">
        <div className="container">
          <div className="row">
            <h3>Popular Movies</h3>
          </div>
          <div className="row content">
            <div className="col-md-6 col-lg-3">
              <Link to="/movie-detail">
                <MovieThumb />
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link to="/movie-detail">
                <MovieThumb />
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link to="/movie-detail">
                <MovieThumb />
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link to="/movie-detail">
                <MovieThumb />
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link to="/movie-detail">
                <MovieThumb />
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link to="/movie-detail">
                <MovieThumb />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
