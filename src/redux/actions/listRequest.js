import * as types from "../../constants/type";

export const requestList = (filters) => ({
  type: types.LIST_REQUEST,
  payload: filters,
});

export const startGetListRequest = (loading) => ({
  type: types.START_GET_LIST_REQUEST,
  payload: loading,
});
export const endGetListRequest = (loading) => ({
  type: types.END_GET_LIST_REQUEST,
  payload: loading,
});
export const getListRequestSuccess = (data) => ({
  type: types.GET_LIST_REQUEST_SUCCESS,
  payload: data,
});
export const getListRequestFail = (error) => ({
  type: types.GET_LIST_REQUEST_FAIL,
  payload: error,
});
//*********************** */
export const addRequest = (data) => ({
  type: types.ADD_REQUEST,
  payload: data,
  loading: true,
});

export const addRequestSuccess = (data) => ({
  type: types.ADD_REQUEST_SUCCESS,
  payload: data,
  loading: false,
});
export const addRequestfaild = (error) => ({
  type: types.ADD_REQUEST_FAIL,
  payload: error,
  loading: false,
});

export const filterRequest = (filters) => ({
  type: types.FILTERS_REQUEST,
  payload: filters,
  loading: false,
});
export const filterRequestSuccess = (data) => ({
  type: types.FILTERS_REQUEST_SUCCESS,
  payload: data,
  loading: false,
});
