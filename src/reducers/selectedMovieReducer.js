import { FETCH_MOVIE, CLEAR_MOVIE } from "../actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload;
    case CLEAR_MOVIE:
      return initialState;
    default:
      return state;
  }
}
