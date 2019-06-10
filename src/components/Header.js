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
    // e.preventDefault();

    this.setState({ searchTerm: e.target.value });

    setTimeout(() => {
      this.props.searchMovies(this.state.searchTerm);
    }, 200);
  };

  render() {
    return (
      <div className="Header" id="#top">
        <div className="">
          <img
            className="logo"
            src={require(`../assets/img/tmdb-logo.png`)}
            alt="tmdb"
          />
          <div className=" line line-1" />
          <div className=" line line-2" />
          <div className=" line line-3" />
          <div className=" line line-4" />
          <div className=" line line-5" />
          <div className=" line line-6" />
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
