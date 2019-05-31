import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MovieDetail.css";

class MovieDetail extends Component {
  render() {
    return (
      <div className="MovieDetail">
        <div className="MovieDetail-header">
          <div className="MovieDetail-header-image">
            <img
              src="https://cdn-images-1.medium.com/max/2600/1*27HzZV1GL-H1D-gdhXOsIg.jpeg"
              alt="bohemian rhapsody"
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
                  src="https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg"
                  className="db br2 br--top grow"
                  alt="star wars film."
                />
                <div className="title">
                  <h2>Bohemian Rhapsody</h2>
                  <p>2018 . 99% User Score </p>
                  <p>2h 15min</p>
                </div>
              </article>
              <hr />
              <div className="MovieDetail-overview">
                <h2>Overview</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
