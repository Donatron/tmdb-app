import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovie, fetchMovieCredits, clearSelectedMovie } from "../actions";
import moment from "moment";

import "./MovieDetail.css";
import config from "../config/config";
import placeholderImg from "../assets/img/no-profile-picture.png";
import Loader from "./Loader";
import MovieCastList from "./MovieCastList";

class MovieDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovie(id);
    // this.props.fetchMovieCredits(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedMovie();
  }

  formatRunTime(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime - hours * 60;

    return {
      hours,
      minutes
    };
  }

  renderGenres(genres) {
    const genresString = genres.map((genre, i) => {
      if (i === genres.length - 1) {
        return genre.name;
      } else {
        return `${genre.name}, `;
      }
    });

    return genresString;
  }

  renderProductionCompanies(productionCompanies) {
    const { imageRootURL } = config;
    return productionCompanies.map(company => {
      if (company.logo_path !== null) {
        return (
          <div className="col-3">
            <img
              src={`${imageRootURL}/${company.logo_path}`}
              alt={company.name}
            />
            <p>{company.name}</p>
          </div>
        );
      } else {
        return (
          <div className="col-3 link">
            <img src={`${placeholderImg}`} alt={company.name} />
            <p>{company.name}</p>
          </div>
        );
      }
    });
  }

  renderMovie() {
    const { imageRootURL } = config;
    const { selectedMovie } = this.props;

    const {
      backdrop_path,
      original_title,
      overview,
      poster_path,
      release_date,
      vote_average,
      runtime,
      genres,
      imdb_id,
      homepage,
      production_companies
    } = selectedMovie;

    let formattedTime = this.formatRunTime(runtime);

    let formattedDate = moment(release_date).format("YYYY");

    if (Object.keys(this.props.selectedMovie).length === 0) {
      return <Loader />;
    } else {
      return (
        <div>
          <div className="MovieDetail-header">
            <div className="MovieDetail-header-image">
              <img
                src={`${imageRootURL}/${backdrop_path}`}
                alt={original_title}
              />
              <Link to="/">
                <i className="fa fa-arrow-left" />
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="MovieDetail-details col col-md-10 col-lg-8 m-auto">
                <article className="">
                  <img
                    src={`${imageRootURL}/${poster_path}`}
                    alt={original_title}
                  />
                  <div className="title">
                    <h2>{original_title}</h2>
                    <p className="genres">{this.renderGenres(genres)}</p>
                    <p>
                      {formattedDate} - {vote_average * 10}% User Score{" "}
                    </p>
                    <p>
                      {formattedTime.hours}h {formattedTime.minutes} min
                    </p>
                  </div>
                </article>
                <hr />
                <div className="MovieDetail-overview">
                  <h2>Overview</h2>
                  <p>{overview}</p>
                </div>
                <hr />
                <div className="MovieDetail-cast">
                  <h2>Cast</h2>
                  <MovieCastList />
                </div>
                <hr />
                <div className="MovieDetail-production-companies">
                  <h2>Production Companies</h2>
                  <div className="links row">
                    {this.renderProductionCompanies(production_companies)}
                  </div>
                </div>
                <hr />
                <div className="MovieDetail-links">
                  <h2>Links</h2>
                  <div className="links">
                    <a
                      href={`https://www.imdb.com/title/${imdb_id}`}
                      target="_blank"
                    >
                      <img
                        src="https://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png"
                        alt="imdb"
                      />
                    </a>
                    {homepage ? (
                      <a href={homepage} target="_blank">
                        <i className="fa fa-home" />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div className="MovieDetail">{this.renderMovie()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
    credits: state.selectedMovie.credits
  };
};

export default connect(
  mapStateToProps,
  { fetchMovie, fetchMovieCredits, clearSelectedMovie }
)(MovieDetail);
