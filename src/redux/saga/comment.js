import { call, put, takeEvery } from "redux-saga/effects";
import { API_DOES_NOT_EXIT, CODE_SUCCESS, GET_COMMENT, POST_COMMENT } from "../../constants/type";
import commentApi from "../../services/api/commentApi";
import * as actions from "../actions/comment";
import * as action from "../actions/requestDetail";

function* postComment(data) {
  try {
    const dataPostComments = yield call(commentApi.post, data.payload);
    if (dataPostComments) {
      yield put(actions.postCommentSuccess(dataPostComments));
    }
  } catch (error) {
    yield put(actions.getCommentFail(API_DOES_NOT_EXIT));
  }
}

export function* watchPostComment() {
  yield takeEvery(POST_COMMENT, postComment);
}
