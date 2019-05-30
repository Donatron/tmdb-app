import React, { Component } from "react";

import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox my-5">
        <form className="form-inline my- my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="search"
          />
          <i className="fa fa-search" />
        </form>
      </div>
    );
  }
}

export default SearchBox;
