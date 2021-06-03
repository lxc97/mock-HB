import { call, put, takeEvery } from "redux-saga/effects";
import { CODE_SUCCESS, DELETE_REQUEST } from "../../constants/type";
import listRequestApi from "../../services/api/listRequestApi";
import * as actions from "../actions/listRequest";
import history from "../../history";

function* deleteRequest(data) {
  console.log("data saga: ", data);
  try {
    const deleteRequest = yield call(listRequestApi.delete, data);
    if (deleteRequest) {
      yield put(actions.deleteRequestSuccess(data.payload));
    }
  } catch (error) {
    yield put(actions.deleteRequestFail(error.message));
  }
}

export function* watchDeleteRequest() {
  yield takeEvery(DELETE_REQUEST, deleteRequest);
}
