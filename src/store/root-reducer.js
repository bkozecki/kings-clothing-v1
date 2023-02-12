import { combineReducers } from "redux";
import { useReducer } from "./user-reducer";

export const rootReducer = combineReducers({
  user: useReducer,
});
