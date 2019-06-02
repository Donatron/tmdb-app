import { FETCH_MOVIES, SEARCH_MOVIES } from "../actions";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case SEARCH_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
