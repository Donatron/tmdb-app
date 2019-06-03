import axios from "axios";
import config from "../config/config";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";
export const CLEAR_MOVIE = "CLEAR_MOVIE";
export const SEARCH_MOVIES = "SEARCH_MOVIES";

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
    `https://api.themoviedb.org/3/search/movie?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US&query=${searchTerm}&page=1&include_adult=false`
  );

  dispatch({
    type: SEARCH_MOVIES,
    payload: request.data.results
  });
};

export const fetchMovie = id => async dispatch => {
  const request = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${config.APIKey}=en-US`
  );

  dispatch({
    type: FETCH_MOVIE,
    payload: request.data
  });
};

export const clearSelectedMovie = () => {
  return {
    type: CLEAR_MOVIE
  };
};
