import React, { Component } from "react";

import "./MovieCrewThumb.css";
import placeholderImg from "../assets/img/no-profile-picture.png";
import config from "../config/config";

class MovieCrewThumb extends Component {
  render() {
    const { name, job, profile_path } = this.props;

    return (
      <div className="MovieCrewThumb">
        <article className="">
          {profile_path ? (
            <img
              src={`${config.imageRootURL}/${profile_path}`}
              className="db br2 br--top grow"
              alt={name}
            />
          ) : (
            <img
              src={`${placeholderImg}`}
              className="db br2 br--top grow"
              alt={name}
            />
          )}

          <div className="title">
            <h3>{job}</h3>
            <br />
            <p>{name}</p>
          </div>
        </article>
      </div>
    );
  }
}

export default MovieCrewThumb;
