import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovie, clearSelectedMovie } from "../actions";
import moment from "moment";

import "./MovieDetail.css";
import config from "../config/config";
import Loader from "./Loader";

class MovieDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovie(id);
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

  renderMovie() {
    const { imageRootURL } = config;
    const { selectedMovie } = this.props;
    console.log(selectedMovie);
    const {
      backdrop_path,
      original_title,
      overview,
      poster_path,
      release_date,
      vote_average,
      runtime
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
                    <p>
                      {formattedDate} . {vote_average * 10}% User Score{" "}
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
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="MovieDetail">
        {this.renderMovie()}
        {/* <div className="MovieDetail-header">
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
            <div className="MovieDetail-details col-8 m-auto">
              <article className="">
                <img
                  src={`${imageRootURL}/${poster_path}`}
                  alt={original_title}
                />
                <div className="title">
                  <h2>{original_title}</h2>
                  <p>
                    {formattedDate} . {vote_average * 10}% User Score{" "}
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
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie
  };
};

export default connect(
  mapStateToProps,
  { fetchMovie, clearSelectedMovie }
)(MovieDetail);
