import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovies } from "../actions";

import "./Header.css";
import SearchBox from "./SearchBox";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ""
    };
  }

  handleKeyUp = e => {
    e.preventDefault();

    this.setState({ searchTerm: e.target.value });

    setTimeout(() => {
      this.props.searchMovies(this.state.searchTerm);
    }, 200);
  };

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
        <SearchBox onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}

export default connect(
  null,
  { searchMovies }
)(Header);
