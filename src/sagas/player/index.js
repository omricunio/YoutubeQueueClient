import { FETCH_QUEUE, CREATE_QUEUE } from './actionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getQueueRequest, createQueueRequest } from '../../requests/serverRequests';
import { setItems } from '../../reducers/player/actions';

function* fetchQueue(action) {
    let queue=[];
    try {
        queue = yield call(getQueueRequest, action.guid);
        yield put(setItems(queue.items))
    }
    catch(e) {
        console.error('Error in fetching queue', e);
    }
}

export default function*() {
    yield takeLatest(FETCH_QUEUE, fetchQueue);
}