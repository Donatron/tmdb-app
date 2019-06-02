import React, { Component } from "react";
import moment from "moment";

import "./MovieThumb.css";
import config from "../config/config";

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

  render() {
    const imageRootURL = config.imageRootURL;
    const { poster, rating, title, releaseDate } = this.props;
    let formattedDate = moment(releaseDate).format("MMM YYYY");

    let badgeColor = this.getBadgeColor(rating);

    return (
      <div className="MovieThumb">
        <article className="">
          <img
            src={`${imageRootURL}/${poster}`}
            className="db br2 br--top grow"
            alt={title}
          />
          <span className="badge" style={{ backgroundColor: badgeColor }}>
            {rating}%
          </span>
          <div className="title">
            <h3>{title}</h3>
            <br />
            <p>{formattedDate}</p>
          </div>
        </article>
      </div>
    );
  }
}

export default MovieThumb;
