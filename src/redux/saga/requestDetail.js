import { call, put, takeEvery } from "redux-saga/effects";
import {
  API_DOES_NOT_EXIT,
  CODE_SUCCESS,
  REQUEST_DETAIL,
} from "../../constants/type";
import requestDetailApi from "../../services/api/requestDetailApi";
import * as actions from "../actions/requestDetail";

function* requestDetail(data) {
  try {
    const dataRequest = yield call(requestDetailApi.get, data.payload.id);
    if (dataRequest) {
      yield put(actions.getRequestSuccess(dataRequest));
      if (dataRequest.code !== CODE_SUCCESS) {
        yield put(actions.getRequestFail(dataRequest.message));
      }
    }
  } catch {
    yield put(actions.getRequestFail(API_DOES_NOT_EXIT));
  }
}

export default function* watchRequestDetail() {
  yield takeEvery(REQUEST_DETAIL, requestDetail);
}
