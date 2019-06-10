import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MovieCrewList.css";
import MovieCrewThumb from "./MovieCrewThumb";

class MovieCrewList extends Component {
  renderCrewList(crew) {
    return crew.map(c => {
      return (
        <div className="col-6 col-md-4 col-lg-3" key={c.id}>
          <Link to={`/crew-detail/${c.id}`}>
            <MovieCrewThumb
              name={c.name}
              job={c.job}
              profile_path={c.profile_path}
            />
          </Link>
        </div>
      );
    });
  }

  render() {
    const { crew } = this.props;
    return (
      <div className="MovieCrewList">
        <div className="container">
          <div className="row no-gutters">{this.renderCrewList(crew)}</div>
        </div>
      </div>
    );
  }
}

export default MovieCrewList;
