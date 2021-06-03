import { call, put, takeEvery } from "redux-saga/effects";
import { HISTORY } from "../../constants/type";
import historyApi from "../../services/api/historyApi";
import * as actions from "../actions/history";

//get category saga
function* history(filters) {
  try {
    const dataHistory = yield call(historyApi.get, filters);
    if (dataHistory) {
      yield put(actions.getHistorySuccess(dataHistory));
    }
  } catch (error) {
    yield put(actions.getHistoryFail(error.message));
  }
}

export default function* watchHistory() {
  yield takeEvery(HISTORY, history);
}
