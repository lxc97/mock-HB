import { call, put, takeEvery } from "redux-saga/effects";
import { API_DOES_NOT_EXIT, GET_USER } from "../../constants/type";
import userApi from "../../services/api/userApi";
import * as actions from "../actions/user";

function* user() {
  try {
    const dataUser = yield call(userApi.get);
    console.log({dataUser})
    if (dataUser) {
      yield put(actions.getUserSuccess(dataUser));
    }
  } catch {
    yield put(actions.getUserFail(API_DOES_NOT_EXIT));
  }
}

export default function* watchUser() {
  yield takeEvery(GET_USER, user);
}
