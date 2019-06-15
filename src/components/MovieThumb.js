import React, { Component } from "react";
import moment from "moment";

import "./MovieThumb.css";
import config from "../config/config";
import placeholderImg from "../assets/img/no-profile-picture.png";

class MovieThumb extends Component {
  getBadgeColor(rating) {
    if (rating >= 67) {
      return "#01D277";
    } else if (rating > 33) {
      return "#4902A3";
    } else {
      return "#D1225B";
    }
  }

  renderMovieThumb = movie => {
    const imageRootURL = config.imageRootURL;
    const { title, releaseDate } = movie;
    const rating = movie.vote_average * 10;
    let { poster_path } = movie;
    let formattedDate = moment(releaseDate).format("MMM YYYY");

    poster_path === null
      ? (poster_path = placeholderImg)
      : (poster_path = `${imageRootURL}/${poster_path}`);
    let badgeColor = this.getBadgeColor(rating);

    return (
      <article className="">
        <img src={poster_path} className="db br2 br--top grow" alt={title} />
        <span className="badge" style={{ backgroundColor: badgeColor }}>
          {rating}%
        </span>
        <div className="title">
          <h3>{title}</h3>
          <br />
          <p>{formattedDate}</p>
        </div>
      </article>
    );
  };

  render() {
    const { movie } = this.props;

    return <div className="MovieThumb">{this.renderMovieThumb(movie)}</div>;
  }
}

export default MovieThumb;
