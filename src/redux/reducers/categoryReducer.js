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

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY:
      return {
        ...state,
        loading: true,
      };

    case types.GET_CATEGORY_SUCCESS:
      console.log("login success: ", action);
      console.log({ state });
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case types.POST_CATEGORY_SUCCESS:
      return {
        ...state,
        data: [action.payload.show, ...state.data],
        loading: false,
        notify: {
          isOpen: true,
          message: "Thêm request thành công!",
          type: "success",
        },
      };

    case types.DELETE_CATEGORY_SUCCESS:
      console.log("DELETE_CATEGORY_SUCCESS: ", action);
      const indexDelete = state.data.findIndex((x) => x.id === action.payload);
      const newStateDelete = { ...state };
      console.log("newStateDelete", newStateDelete);
      newStateDelete.data.splice(indexDelete, 1);
      return newStateDelete;

    case types.GET_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
export default categoryReducer;
