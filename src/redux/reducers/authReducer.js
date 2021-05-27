import * as types from "../../constants/type";

const initialState = {
  loading: false,
  error: "",
  notify: {
    isOpen: false,
    message: "",
    type: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loading: action.payload,
      };

    case types.LOGIN_SUCCESS:
      console.log("login success: ", action);
      console.log({state})
      return {
        ...state,
        data: { ...action.payload },
        loading: action.loading,
        notify: {
          isOpen: action.payload.code === 200 ? false : true,
          message: action.payload.message,
          type: "error",
        },
      };

    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: action.loading,
        notify: {
          isOpen: true,
          message: action.payload,
          type: "error",
        },
      };

    default:
      return state;
  }
};
export default authReducer;
