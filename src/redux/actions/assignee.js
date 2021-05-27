import * as types from "../../constants/type";

export const assignee = () => ({
  loading: true,
  type: types.GET_ASSIGNEE,
});

export const assigneeSuccess = (data) => ({
  type: types.GET_ASSIGNEE_SUCCESS,
  payload: data,
  loading: false,
});
export const assigneeFail = (error) => ({
  type: types.GET_ASSIGNEE_FAIL,
  payload: error,
  loading: false,
});
