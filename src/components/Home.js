import React, { Component } from "react";

import Header from "./Header";
import MovieList from "./MovieList";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default Home;
