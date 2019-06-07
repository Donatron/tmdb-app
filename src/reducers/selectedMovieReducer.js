import { FETCH_MOVIE, FETCH_MOVIE_CREDITS, CLEAR_MOVIE } from "../actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload;
    case FETCH_MOVIE_CREDITS:
      return { ...state, credits: action.payload };
    case CLEAR_MOVIE:
      return initialState;
    default:
      return state;
  }
}
