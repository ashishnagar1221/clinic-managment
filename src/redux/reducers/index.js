import { combineReducers } from "redux";
import countReducer from "./countReducers";

const rootReducer = combineReducers({
  countReducer: countReducer,
});

export default rootReducer;
