import { FETCH_PERSON, CLEAR_PERSON } from "../actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PERSON:
      return action.payload;
    case CLEAR_PERSON:
      return initialState;
    default:
      return state;
  }
}
