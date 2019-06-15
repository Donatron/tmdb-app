import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./MovieCastList.css";
import MovieCastThumb from "./MovieCastThumb";

class MovieCastList extends Component {
  renderCastList(credits) {
    const { cast } = credits;

    return cast.map(c => {
      const { id } = c;

      return (
        <div className="col-6 col-md-4 col-lg-3" key={id}>
          <Link to={`/cast-detail/${id}`}>
            <MovieCastThumb
              character={c.character}
              name={c.name}
              img={c.profile_path}
              castMember={c}
            />
          </Link>
        </div>
      );
    });
  }

  render() {
    const { credits } = this.props;

    if (!credits) {
      return <div />;
    } else {
      return (
        <div className="MovieCastList">
          <div className="container">
            <div className="row no-gutters">{this.renderCastList(credits)}</div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
    credits: state.selectedMovie.credits
  };
};

export default connect(mapStateToProps)(MovieCastList);
