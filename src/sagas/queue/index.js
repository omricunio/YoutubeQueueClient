import { ADD_ITEM_TO_QUEUE, CREATE_QUEUE, FETCH_QUEUE } from './actionTypes';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { addItemToQueueRequest, getQueueRequest, createQueueRequest } from '../../requests/serverRequests';
import { addItem, setItems } from '../../reducers/player/actions';
import { setQueueGuid } from '../../reducers/appSettings/actions';
import { ERROR_TOAST } from '../toasters/toasters';
import { showToast } from '../toasters/actions';

function* addItemToQueue({item}) {
    const queueGuid = yield select((state) => state.appSettings.queueGuid);
    if(!queueGuid) { 
        console.error('Cannot add item to queue, wrong queue id');
        return; 
    }

    try {
        yield call(addItemToQueueRequest, item, queueGuid);
        yield put(addItem(item));
    }
    catch(e) {
        console.error('Error in adding item to queue', e);
    }
}

function* createQueue() {
    try {
        const response = yield call(createQueueRequest);
        yield put(setQueueGuid(response.guid))
    }
    catch(e) {
        yield put(showToast(ERROR_TOAST, 'Shared Queue Creation Failed'));
        console.error('Error in creating queue', e);
    }
}

function* fetchQueue({guid}) {
    let queue=[];
    try {
        queue = yield call(getQueueRequest, guid);
        yield put(setItems(queue.items));
        yield put(setQueueGuid(guid));
    }
    catch(e) {
        yield put(showToast(ERROR_TOAST, 'Failed to fetch queue'));
    }
}

export default function*() {
    yield takeLatest(ADD_ITEM_TO_QUEUE, addItemToQueue);
    yield takeLatest(CREATE_QUEUE, createQueue);
    yield takeLatest(FETCH_QUEUE, fetchQueue);
}