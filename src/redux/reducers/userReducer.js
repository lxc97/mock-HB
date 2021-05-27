import * as types from "../../constants/type";

const initialState = {
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      console.log({ action });
      return {
        ...state,
        loading: action.payload,
      };

    case types.GET_USER_SUCCESS:
      console.log("login success: ", action);
      return {
        ...state,
        data: action.payload.data,
        loading: action.loading,
      };

    case types.GET_USER_FAIL:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};
export default userReducer;
