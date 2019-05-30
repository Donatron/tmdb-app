import React, { Component } from "react";

import "./Header.css";
import SearchBox from "./SearchBox";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="">
          <img
            className="logo"
            src={require(`../assets/img/tmdb-logo.png`)}
            alt="tmdb"
          />
        </div>
        <SearchBox />
      </div>
    );
  }
}

export default Header;
