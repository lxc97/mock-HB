import { call, put, takeEvery } from "redux-saga/effects";
import { LIST_REQUEST } from "../../constants/type";
import listRequestApi from "../../services/api/listRequestApi";
import * as actions from "../actions/listRequest";

function* listRequest(filters) {
  try {
    yield put(actions.startGetListRequest(true));
    const data = yield call(listRequestApi.getAll, filters);
    if (data) {
      yield put(actions.getListRequestSuccess(data));
    } else {
      yield put(
        actions.getListRequestFail({
          cod: 404,
          message: "NOT FOUND",
        })
      );
    }
  } catch (error) {
    yield put(actions.getListRequestFail(false));
  } finally {
    yield put(actions.endGetListRequest(false));
  }
}

export default function* watchListRequest() {
  yield takeEvery(LIST_REQUEST, listRequest);
}
