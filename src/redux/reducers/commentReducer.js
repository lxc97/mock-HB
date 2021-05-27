import * as types from "../../constants/type";
const initialState = {
  loading: false,
  error: "",
  data: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_COMMENT:
      return {
        ...state,
        loading: action.loading,
      };
    case types.POST_COMMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: action.loading,
      };
    case types.POST_COMMENT_FAIL:
      return {
        ...state,
        loading: action.loading,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
export default commentReducer;
