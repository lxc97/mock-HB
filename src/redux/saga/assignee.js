import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_ASSIGNEE,
} from "../../constants/type";
import assigneeApi from "../../services/api/assigneeApi";
import * as actions from "../actions/assignee";

function* assignee() {
  try {
    const dataAssignee = yield call(assigneeApi.get);
    if (dataAssignee) {
      yield put(actions.assigneeSuccess(dataAssignee));
    }
  } catch(error){
    yield put(actions.assigneeFail(error.message));
  }
}

export default function* watchAssignee() {
  yield takeEvery(GET_ASSIGNEE, assignee);
}
