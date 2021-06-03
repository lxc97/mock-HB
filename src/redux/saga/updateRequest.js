import { call, put, takeEvery } from "redux-saga/effects";
import { UPDATE_REQUEST, UPDATE_REQUEST_SUCCESS } from "../../constants/type";
import listRequestApi from "../../services/api/listRequestApi";
import * as actions from "../actions/requestDetail";
import history from "../../history";
//update request saga
function* updateRequest(data) {
  console.log("saga", data);
  try {
    const updateRequest = yield call(listRequestApi.put, data);
    if (updateRequest) {
      yield put(actions.updateRequestSuccess(updateRequest));
      if (updateRequest.code === 200) {
        history.push("/");
      }
    }
  } catch (error) {
    yield put(actions.updateRequestFail(error.message));
  }
}

export default function* watchUpdateRequest() {
  yield takeEvery(UPDATE_REQUEST, updateRequest);
}
