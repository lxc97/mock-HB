import * as types from "../../constants/type";

const initialState = {
  loading: false,
  error: "",
};

const assigneeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ASSIGNEE:
      return {
        ...state,
        loading: action.payload,
      };

    case types.GET_ASSIGNEE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: action.loading,
      };

    case types.GET_ASSIGNEE_FAIL:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};
export default assigneeReducer;
