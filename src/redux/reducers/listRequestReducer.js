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

const listRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_REQUEST:
      return {
        ...state,
      };
    case types.START_GET_LIST_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case types.GET_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        error: "",
        loading: false,
      };
    case types.GET_LIST_REQUEST_FAIL:
      return {
        ...state,
        data: {},
        error: action.payload.error,
        loading: false,
      };

    //********* */
    case types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_REQUEST_SUCCESS:
      console.log("add_request_success: ", action);
      console.log({ state });
      return {
        ...state,
        data: { ...state.data, ...action.payload },
        loading: false,
        notify: {
          isOpen: true,
          message: "Thêm request thành công!",
          type: "success",
        },
      };
    case types.ADD_REQUEST_FAIL:
      return {
        loading: false,
        notify: {
          isOpen: true,
          message: "Thêm request thất bại!",
          type: "error",
        },
      };
    case types.FILTERS_REQUEST:
      console.log("filter_request: ", action);
      return {
        ...state,
      };
    case types.FILTERS_REQUEST_SUCCESS:
      console.log("filter_request: ", action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    //delete request
    case types.DELETE_REQUEST:
      console.log("delete request: ", action);
      return {
        ...state,
      };
    case types.DELETE_REQUEST_SUCCESS:
      console.log("delete_request_success: ", action);
      console.log({ state });
      const indexDelete = state.data.findIndex((x) => x.id === action.payload);
      console.log("newStateDelete", indexDelete);
      const newStateDelete = { ...state };
      newStateDelete?.data?.data.splice(indexDelete, 1);
      return newStateDelete;
    default:
      return state;
  }
};
export default listRequestReducer;
