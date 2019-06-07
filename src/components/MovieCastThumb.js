import React, { Component } from "react";

import "./MovieCastThumb.css";
import config from "../config/config";
import placeholderImg from "../assets/img/no-profile-picture.png";

class MovieCastThumb extends Component {
  render() {
    const imageRootURL = config.imageRootURL;
    const { character, name } = this.props;
    let { img } = this.props;

    img === null ? (img = placeholderImg) : (img = `${imageRootURL}/${img}`);

    return (
      <div className="MovieCastThumb">
        <article className="">
          <img src={img} className="db br2 br--top grow" alt={name} />
          <div className="title">
            <h3>{character}</h3>
            <br />
            <p>{name}</p>
          </div>
        </article>
      </div>
    );
  }
}

export default MovieCastThumb;
