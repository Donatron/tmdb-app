import React, { Component } from "react";

import "./MovieCastThumb.css";
import config from "../config/config";
import placeholderImg from "../assets/img/no-profile-picture.png";

class MovieCastThumb extends Component {
  renderMovieCastThumb = castMember => {
    const imageRootURL = config.imageRootURL;
    const { character, name } = castMember;
    let img = castMember.profile_path;

    img === null ? (img = placeholderImg) : (img = `${imageRootURL}/${img}`);

    return (
      <article className="">
        <img src={img} className="db br2 br--top grow" alt={name} />
        <div className="title">
          <h3>{character}</h3>
          <br />
          <p>{name}</p>
        </div>
      </article>
    );
  };

  render() {
    const { castMember } = this.props;

    return (
      <div className="MovieCastThumb">
        {this.renderMovieCastThumb(castMember)}
      </div>
    );
  }
}

export default MovieCastThumb;
