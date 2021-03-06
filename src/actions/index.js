import axios from "axios";
import config from "../config/config";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_MOVIE_CREDITS = "FETCH_MOVIE_CREDITS";
export const CLEAR_MOVIE = "CLEAR_MOVIE";
export const FETCH_PERSON = "FETCH_PERSON";
export const CLEAR_PERSON = "CLEAR_PERSON";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const ERROR = "ERROR";

export const fetchMovies = () => async dispatch => {
  const request = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${config.APIKey}=en-US`
  );

  dispatch({
    type: FETCH_MOVIES,
    payload: request.data.results
  });
};

export const searchMovies = searchTerm => async dispatch => {
  const request = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      config.APIKey
    }=en-US&query=${searchTerm}&page=1&include_adult=false`
  );

  if (request.data.results.length === 0) {
    dispatch({
      type: ERROR,
      payload: {
        err: "Nothing found"
      }
    });
  } else {
    dispatch({
      type: SEARCH_MOVIES,
      payload: request.data.results
    });

    dispatch({
      type: ERROR,
      payload: {}
    });
  }
};

export const fetchMovie = id => async dispatch => {
  const request = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${config.APIKey}=en-US`
  );

  dispatch({
    type: FETCH_MOVIE,
    payload: request.data
  });

  dispatch(fetchMovieCredits(id));
};

export const fetchMovieCredits = id => async dispatch => {
  console.log("Fetching credits");
  const request = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
      config.APIKey
    }=en-US`
  );

  dispatch({
    type: FETCH_MOVIE_CREDITS,
    payload: request.data
  });
};

export const clearSelectedMovie = () => {
  return {
    type: CLEAR_MOVIE
  };
};

export const fetchPerson = id => async dispatch => {
  const request = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=${config.APIKey}=en-US`
  );

  dispatch({
    type: FETCH_PERSON,
    payload: request.data
  });
};

export const clearSelectedPerson = () => {
  return {
    type: CLEAR_PERSON
  };
};
