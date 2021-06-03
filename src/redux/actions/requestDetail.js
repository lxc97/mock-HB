import * as types from "../../constants/type";

export const requestDetail = (id) => ({
  type: types.REQUEST_DETAIL,
  payload: id,
  loading: true,
});

export const getRequestSuccess = (data) => ({
  type: types.GET_REQUEST_DETAIL_SUCCESS,
  payload: data,
  loading: false,
});
export const getRequestFail = (error) => ({
  type: types.GET_REQUEST_DETAIL_FAIL,
  payload: error,
  loading: false,
});

//update request
export const updateRequest = (data) => ({
  loading: true,
  type: types.UPDATE_REQUEST,
  payload: data,
});

export const updateRequestSuccess = (data) => ({
  type: types.UPDATE_REQUEST_SUCCESS,
  payload: data,
  loading: false,

});
export const updateRequestFail = (error) => ({
  type: types.UPDATE_REQUEST_FAIL,
  payload: error,
  loading: false,
});
