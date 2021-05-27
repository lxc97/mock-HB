import * as types from "../../constants/type";

//get category action
export const category = () => ({
  loading: true,
  type: types.GET_CATEGORY,
});

export const categorySuccess = (data) => ({
  type: types.GET_CATEGORY_SUCCESS,
  payload: data,
  loading: false,
});
export const categoryFail = (error) => ({
  type: types.GET_CATEGORY_FAIL,
  payload: error,
  loading: false,
});

//Add category action
export const postCategory = (data) => ({
  loading: true,
  type: types.POST_CATEGORY,
  payload: data,
});

export const postCategorySuccess = (data) => ({
  type: types.POST_CATEGORY_SUCCESS,
  payload: data,
  loading: false,
});
export const postCategoryFail = (error) => ({
  type: types.POST_CATEGORY_FAIL,
  payload: error,
  loading: false,
});

//update category action
export const updateCategory = (data) => ({
  loading: true,
  type: types.UPDATE_CATEGORY,
  payload: data,
});

export const updateCategorySuccess = (data) => ({
  type: types.UPDATE_CATEGORY_SUCCESS,
  payload: data,
  loading: false,
});
export const updateCategoryFail = (error) => ({
  type: types.UPDATE_CATEGORY_FAIL,
  payload: error,
  loading: false,
});

//delete category action
export const deleteCategory = (data) => ({
  loading: true,
  type: types.DELETE_CATEGORY,
  payload: data,
});

export const deleteCategorySuccess = (data) => ({
  type: types.DELETE_CATEGORY_SUCCESS,
  payload: data,
  loading: false,
});
export const deleteCategoryFail = (error) => ({
  type: types.DELETE_CATEGORY_FAIL,
  payload: error,
  loading: false,
});
