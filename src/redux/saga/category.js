import { call, put, takeEvery } from "redux-saga/effects";
import { DELETE_CATEGORY, GET_CATEGORY, POST_CATEGORY, UPDATE_CATEGORY } from "../../constants/type";
import categoryApi from "../../services/api/categoryApi";
import * as actions from "../actions/category";

//get category saga
function* category() {
  try {
    const dataCategory = yield call(categoryApi.get);
    if (dataCategory) {
      yield put(actions.categorySuccess(dataCategory));
    }
  } catch (error) {
    yield put(actions.categoryFail(error.message));
  }
}

export function* watchCategory() {
  yield takeEvery(GET_CATEGORY, category);
}

//post category saga
function* postCategory(data) {
  try {
    const postCategory = yield call(categoryApi.post, data);
    if (postCategory) {
      yield put(actions.postCategorySuccess(postCategory));
    }
  } catch (error) {
    yield put(actions.postCategoryFail(error.message));
  }
}

export function* watchPostCategory() {
  yield takeEvery(POST_CATEGORY, postCategory);
}

//update category saga
function* updateCategory(data) {
  try {
    const updateCategory = yield call(categoryApi.put, data);
    if (updateCategory) {
      // yield put(actions.updateCategorySuccess(updateCategory));
      const dataCategory = yield call(categoryApi.get);
      if (dataCategory) {
        yield put(actions.categorySuccess(dataCategory));
      }

    }
  } catch (error) {
    yield put(actions.updateCategoryFail(error.message));
  }
}

export function* watchUpdateCategory() {
  yield takeEvery(UPDATE_CATEGORY, updateCategory);
}

//delete category saga
function* deleteCategory(data) {
  console.log("data saga: ", data)
  try {
    const deleteCategory = yield call(categoryApi.delete, data);
    if (deleteCategory) {
      yield put(actions.deleteCategorySuccess(deleteCategory));
    }
  } catch (error) {
    yield put(actions.deleteCategoryFail(error.message));
  }
}

export function* watchDeleteCategory() {
  yield takeEvery(DELETE_CATEGORY, deleteCategory);
}
