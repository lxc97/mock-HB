import { call, all } from "redux-saga/effects";
import watchAddRequest from "./addRequest";
import watchAuth from "./auth";
import {
  watchPostCategory,
  watchCategory,
  watchUpdateCategory,
  watchDeleteCategory,
} from "./category";
import { watchPostComment } from "./comment";
import watchfilterRequest from "./filterRequest";
import watchListRequest from "./listRequest";
import watchRequestDetail from "./requestDetail";
import watchLogout from "./logout";
import watchUser from "./user";
import watchAssignee from "./assignee";
import watchHistory from "./history";
import { watchDeleteRequest } from "./deleteRequest";
import watchUpdateRequest from "./updateRequest";

export default function* rootSaga() {
  yield all([
    call(watchAuth),
    call(watchListRequest),
    call(watchRequestDetail),
    call(watchPostComment),
    call(watchUser),
    call(watchAddRequest),
    call(watchfilterRequest),
    call(watchPostCategory),
    call(watchUpdateCategory),
    call(watchDeleteCategory),
    call(watchCategory),
    call(watchAssignee),
    call(watchLogout),
    call(watchHistory),
    call(watchDeleteRequest),
    call(watchUpdateRequest),
  ]);
}
