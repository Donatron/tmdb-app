import React, { Component } from "react";

import "./MovieCrewThumb.css";
import placeholderImg from "../assets/img/no-profile-picture.png";
import config from "../config/config";

class MovieCrewThumb extends Component {
  renderMovieCrewList = crewMember => {
    const { name, job, profile_path } = crewMember;

    return (
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
    );
  };

  render() {
    const { crewMember } = this.props;

    return (
      <div className="MovieCrewThumb">
        {this.renderMovieCrewList(crewMember)}
      </div>
    );
  }
}

export default MovieCrewThumb;
