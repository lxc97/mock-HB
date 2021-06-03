import * as types from "../../constants/type";

const initialState = {
  loading: false,
  error: "",
  data: {},
};

const requestDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_DETAIL:
      return {
        ...state,
        loading: action.loading,
      };
    case types.GET_REQUEST_DETAIL_SUCCESS:
      console.log("GET_REQUEST_DETAIL_SUCCESS: ", action);
      return {
        ...state,
        data: { ...action.payload },
        loading: action.loading,
      };
    case types.GET_REQUEST_DETAIL_FAIL:
      return {
        ...state,
        // error: action.payload.error,
      };
    case types.POST_COMMENT_SUCCESS:
      console.log("POST_COMMENT_SUCCESS: ", action);
      console.log({ state });
      return {
        ...state,
        data: {
          ...state.data,
          comments: [action.payload,...state.data.comments],
        },
      };
    default:
      return state;
  }
};
export default requestDetailReducer;
