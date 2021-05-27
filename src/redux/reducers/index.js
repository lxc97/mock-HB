import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import commentReducer from "./commentReducer";
import listRequestReducer from "./listRequestReducer";
import requestDetailReducer from "./requestDetailReducer";
import userReducer from "./userReducer";
import assigneeReducer from "./assigneeReducer"

const rootReducer = combineReducers({
  listRequest: listRequestReducer,
  authReducer: authReducer,
  requestDetail: requestDetailReducer,
  commentReducer: commentReducer,
  userReducer: userReducer,
  categoryReducer: categoryReducer,
  assigneeReducer: assigneeReducer,
});
export default rootReducer;
