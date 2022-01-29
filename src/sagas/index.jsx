import { fork, take, call, put } from "redux-saga/effects";
import { getList } from "../apis/taskApi";
import { STATUS_CODE } from "../constants";
import * as taskTypes from "../constants/task";
import { fetchListTaskSuccess, fetchListTaskFailed } from "../actions/task";
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
        try {
            const resp = yield call(getList);
            // const { status, data, error } = resp;
            // if (status === STATUS_CODE.SUCCESS) {
            //     yield put(fetchListTaskSuccess(resp));
            // }
            yield put(fetchListTaskSuccess(resp));
        } catch (error) {
            yield put(fetchListTaskFailed(error));
        }
    }
}

function* watchCreateTaskAction() {
    console.log("watch Create Task Action");
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
}

export default rootSaga;
