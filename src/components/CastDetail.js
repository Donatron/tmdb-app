import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPerson, clearSelectedPerson } from "../actions";
import moment from "moment";

import "./CastDetail.css";
import config from "../config/config";
import Loader from "./Loader";

class CastDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPerson(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedPerson();
  }

  renderPerson() {
    const { imageRootURL } = config;
    const { selectedPerson } = this.props;

    const {
      birthday,
      deathday,
      name,
      biography,
      place_of_birth,
      profile_path,
      imdb_id,
      homepage
    } = selectedPerson;

    if (Object.keys(this.props.selectedPerson).length === 0) {
      return <Loader />;
    } else {
      return (
        <div className="">
          <div className="CastDetail" />
          <div className="container">
            <div className="row">
              <div className="CastDetail-details col col-md-10 col-lg-8 m-auto">
                <article className="">
                  <div className="CastDetail-header-image">
                    <Link to="/">
                      <i className="fa fa-arrow-left" />
                    </Link>
                    <img src={`${imageRootURL}/${profile_path}`} alt={name} />
                  </div>
                  <div className="title">
                    <h2>{name}</h2>
                    <p>Born: {moment(birthday).format("DD MMM YYYY")}</p>
                    <p>Birthplace: {place_of_birth}</p>
                    {deathday ? (
                      <p>Died: {moment(deathday).format("DD MMM YYYY")}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </article>
                <hr />
                <div className="CastDetail-biography">
                  <h2>Biography</h2>
                  <p>{biography}</p>
                </div>
                <hr />
                <div className="CastDetail-links">
                  <h2>Links</h2>
                  <div className="links">
                    <a
                      href={`https://www.imdb.com/name/${imdb_id}`}
                      target="_blank"
                    >
                      <img
                        src="https://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png"
                        alt="imdb"
                      />
                    </a>
                    {homepage ? (
                      <a href={homepage} target="_blank">
                        <i className="fa fa-home" />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderPerson()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedPerson: state.selectedPerson
  };
};

export default connect(
  mapStateToProps,
  { fetchPerson, clearSelectedPerson }
)(CastDetail);
