import * as types from "../../constants/type";

export const getUser = () => ({
  type: types.GET_USER,
  loading: true,
});

export const getUserSuccess = (data) => ({
  type: types.GET_USER_SUCCESS,
  payload: data,
  loading: false,
});
export const getUserFail = (error) => ({
  type: types.GET_USER_FAIL,
  payload: error,
  loading: false,
});
