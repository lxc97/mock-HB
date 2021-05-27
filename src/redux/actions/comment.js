import * as types from "../../constants/type";

// action get comment
export const getComment = (data) => ({
  type: types.GET_COMMENT,
  loading: true,
  payload: data,
});

export const getCommentSuccess = (data) => ({
  type: types.GET_COMMENT_SUCCESS,
  payload: data,
  loading: false,
});
export const getCommentFail = (error) => ({
  type: types.GET_COMMENT_FAIL,
  payload: error,
  loading: false,
});

//action post comment
export const postComment = (data) => ({
  type: types.POST_COMMENT,
  loading: true,
  payload: data,
});

export const postCommentSuccess = (data) => ({
  type: types.POST_COMMENT_SUCCESS,
  payload: data,
  loading: false,
});
export const postCommentFail = (error) => ({
  type: types.POST_COMMENT_FAIL,
  payload: error,
  loading: false,
});
