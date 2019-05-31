import React, { Component } from "react";

import "./MovieThumb.css";

class MovieThumb extends Component {
  render() {
    return (
      <div className="MovieThumb">
        <article className="">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg"
            className="db br2 br--top grow"
            alt="bohemian rhapsody."
          />
          <span className="badge">99%</span>
          <div className="title">
            <h3>Bohemian Rhapsody</h3>
            <br />
            <p>April 2018</p>
          </div>
        </article>
      </div>
    );
  }
}

export default MovieThumb;
