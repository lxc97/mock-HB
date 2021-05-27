import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_REQUEST } from "../../constants/type";
import listRequestApi from "../../services/api/listRequestApi";
import * as actions from "../actions/listRequest";

function* addRequest(data) {
  console.log("Saga add", data);
  try {
    const dataAddRequest = yield call(listRequestApi.post, data);
    if (dataAddRequest) {
      yield put(actions.addRequestSuccess(dataAddRequest));
    }
  } catch (error) {
    yield put(actions.addRequestfaild(error.message));
  }
}

export default function* watchAddRequest() {
  yield takeEvery(ADD_REQUEST, addRequest);
}
