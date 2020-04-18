import { CREATE_QUEUE } from './actionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import { createQueueRequest } from '../../requests/serverRequests';
import { setQueueGuid } from '../../reducers/appSettings/actions';

function* createQueue() {
    try {
        const response = yield call(createQueueRequest);
        yield put(setQueueGuid(response.guid))
    }
    catch(e) {
        console.error('Error in creating queue', e);
    }
}

export default function*() {
    yield takeLatest(CREATE_QUEUE, createQueue);
}