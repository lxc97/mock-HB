import { call, put, takeEvery } from "redux-saga/effects";
import { POST_COMMENT } from "../../constants/type";
import commentApi from "../../services/api/commentApi";
import * as actions from "../actions/comment";

function* postComment(data) {
  try {
    const dataPostComments = yield call(commentApi.post, data.payload);
    if (dataPostComments) {
      yield put(actions.postCommentSuccess(dataPostComments));
    }
  } catch (error) {
    yield put(actions.postCommentFail(error.message));
  }
}

export function* watchPostComment() {
  yield takeEvery(POST_COMMENT, postComment);
}
