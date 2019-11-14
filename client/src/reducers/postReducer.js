import * as TYPE from "../actions/types";
import { realpathSync } from "fs";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case TYPE.ADD_WORS:
      return [...state, action.payload];
    case TYPE.READ_WORS:
      return action.posts;
    default:
      return state;
  }
}
