import {
    fork,
    take,
    call,
    put,
    delay,
    takeLatest,
    select,
} from "redux-saga/effects";
import { getList } from "../apis/taskApi";
// import { STATUS_CODE } from "../constants";
import * as taskTypes from "../constants/task";
import {
    fetchListTaskSuccess,
    fetchListTaskFailed,
    filterTaskSuccess,
} from "../actions/task";
import { hideLoading, showLoading } from "../actions/ui";

/**
 * B1:  Thực thi action fetch task
 * B2:  Gọi api
 * B3:  Kiểm tra
 * Nếu thành công ...
 * Nếu thất bại ...
 * B4:  Thực thi các công việc tiếp theo
 */
function* watchFetchListTaskAction() {
    while (true) {
        yield take(taskTypes.FETCH_TASK);
        yield put(showLoading());

        try {
            const resp = yield call(getList);
            yield delay(1000);
            // const { status, data, error } = resp;
            // if (status === STATUS_CODE.SUCCESS) {
            //     yield put(fetchListTaskSuccess(resp));
            // }
            yield put(fetchListTaskSuccess(resp));
        } catch (error) {
            yield put(fetchListTaskFailed(error));
        }
        yield put(hideLoading());
    }
}

function* filterTaskSaga({ payload }) {
    payload = payload.trim().toLowerCase();
    try {
        const resp = yield call(getList);
        const list = resp.data;
        // const list = yield select((state) => state.task.listTask);
        yield delay(1000);

        const filteredTask = list.filter((task) =>
            task.title.toLowerCase().includes(payload)
        );
        console.log("filteredTask", filteredTask);

        yield put(filterTaskSuccess(filteredTask));
    } catch (error) {
        yield put(fetchListTaskFailed(error));
    }
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);

    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
