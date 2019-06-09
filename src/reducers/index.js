import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import errorReducer from "./errorReducer";
import personReducer from "./personReducer";

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
  error: errorReducer,
  selectedPerson: personReducer
});
