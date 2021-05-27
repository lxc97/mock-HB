import * as types from "../../constants/type";

export const login = (data) => ({
  loading: true,
  type: types.LOGIN,
  payload: data,
});

export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
  loading: false,
});
export const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
  loading: false,
});

export const logout = () => ({
  loading: true,
  type: types.LOGOUT,
});

