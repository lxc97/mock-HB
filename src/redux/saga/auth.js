import { call, put, takeEvery } from "redux-saga/effects";
import { API_DOES_NOT_EXIT, CODE_SUCCESS, LOGIN } from "../../constants/type";
import authApi from "../../services/api/authApi";
import { saveToken } from "../../utils/LocalStorageHandler";
import * as actions from "../actions/auth";
import history from "../../history";

function* auth(data) {
  console.log({ data });
  try {
    const dataAuth = yield call(authApi.login, data.payload);
    if (dataAuth) {
      yield put(actions.loginSuccess(dataAuth));
      console.log(dataAuth);

      if (dataAuth.code === CODE_SUCCESS) {
        saveToken(dataAuth.data.access_token);
        // history.push("/");
        window.location = "/"
      }
    }
  } catch {
    yield put(actions.loginFail(API_DOES_NOT_EXIT));
  }
}

export default function* watchAuth() {
  yield takeEvery(LOGIN, auth);
}
