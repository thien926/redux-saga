import * as taskApi from "../apis/taskApi";
import * as taskConstants from '../constants/task';

export const fetchListTask = () => (dispatch) => {
    dispatch({
        type : taskConstants.FETCH_TASK
    })
}

export const fetchListTaskSuccess = (data) => (dispatch) => {
    dispatch({
        type : taskConstants.FETCH_TASK_SUCCESS,
        payload : data
    })
}

export const fetchListTaskFailed = (error) => (dispatch) => {
    dispatch({
        type : taskConstants.FETCH_TASK_FAILED,
        payload : error
    })
}

/**
 * B1: fetchListTaskRequest
 * B2: Reset : state tasks => []
 * B3: fetchListTaskSuccess ( data response )
 * @returns
 */

export const fetchListTaskRequest = () => (dispatch) => {
    // dispatch(fetchListTask());
    taskApi
        .getList()
        .then((data) => {
            // console.log("data: ", data);
            dispatch(fetchListTaskSuccess(data));
        })
        .catch((error) => {
            // console.log("error: ", error);
            dispatch(fetchListTaskFailed(error));
        });
};
