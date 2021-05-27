import { call, put, takeEvery } from "redux-saga/effects";
import {LOGIN } from "../../constants/type";
import authApi from "../../services/api/authApi";
import * as actions from "../actions/auth";

function* logout() {
  try {
    yield call(authApi.logout);
  } catch (error) {
    yield put(actions.loginFail(error.message));
  }
}

export default function* watchLogout() {
  yield takeEvery(LOGIN, logout);
}
