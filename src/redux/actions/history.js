import * as types from "../../constants/type";

// action get comment
export const history = (filters) => ({
  type: types.HISTORY,
  loading: true,
  payload: filters,
});

export const getHistorySuccess = (data) => ({
  type: types.GET_HISTORY_SUCCESS,
  payload: data,
  loading: false,
});
export const getHistoryFail = (error) => ({
  type: types.GET_HISTORY_FAIL,
  payload: error,
  loading: false,
});
