import * as types from "../../constants/type";

const initialState = {
  loading: false,
  error: "",
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HISTORY:
      return {
        ...state,
        loading: action.payload,
      };

    case types.GET_HISTORY_SUCCESS:
      console.log("GET_HISTORY_SUCCESS: ", action)
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
export default historyReducer;
