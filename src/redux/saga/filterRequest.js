import { call, put, takeEvery } from "redux-saga/effects";
import { FILTERS_REQUEST } from "../../constants/type";
import listRequestApi from "../../services/api/listRequestApi";
import * as actions from "../actions/listRequest";


function* filterRequest(filters) {
    console.log("filtersaga",{ filters })
    try {
        yield put(actions.startGetListRequest(true));
        const dataFilters = yield call(listRequestApi.getFilters, filters);
        console.log({dataFilters})
        if (dataFilters) {
            yield put(actions.filterRequestSuccess(dataFilters));
        }
    } catch (error) {
        console.log(error);
    }
}

export default function* watchfilterRequest() {
    yield takeEvery(FILTERS_REQUEST, filterRequest);
}
