import { all } from "redux-saga/effects";
import incrementCountWatcher from "./countSaga";

export default function* rootSaga() {
  yield all([incrementCountWatcher()]);
}
