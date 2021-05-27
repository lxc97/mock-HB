import * as types from "../../constants/type";

const initialState = {
  loading: false,
  error: "",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY:
      return {
        ...state,
        loading: action.payload,
      };

    case types.GET_CATEGORY_SUCCESS:
      console.log("login success: ", action);
      console.log({ state });
      return {
        ...state,
        data: action.payload.data,
        loading: action.loading,
      };
    case types.POST_CATEGORY_SUCCESS:
      console.log("POST_CATEGORY_SUCCESS: ", action);
      console.log({ state });
      return {
        ...state,
        data: [...state.data, action.payload.createCategory],
        loading: action.loading,
      };
    case types.UPDATE_CATEGORY_SUCCESS:
      console.log("UPDATE_CATEGORY_SUCCESS: ", action);
      console.log({ state });
      return {
        ...state,
        loading: action.loading,
      };

    case types.GET_CATEGORY_FAIL:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};
export default categoryReducer;
