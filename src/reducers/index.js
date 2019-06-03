import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
  error: errorReducer
});
