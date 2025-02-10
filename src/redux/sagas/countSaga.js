import { delay, put, takeLatest } from "redux-saga/effects";
import { incrementSuccess } from "../actions/countActions";
import { INCREMENT_REQUEST } from "../constants";

function* incrementCountWorker() {
  yield delay(1000);
  yield put(incrementSuccess());
}

export default function* incrementCountWatcher() {
  yield takeLatest(INCREMENT_REQUEST, incrementCountWorker);
}
