import { generateUser } from "../static-data";
import { combineReducers } from "redux";

export default function user(state = generateUser(), action) {
  return state;
}