import { ADD_ITEM_TO_QUEUE, CREATE_QUEUE, FETCH_QUEUE, DELETE_ITEM_FROM_QUEUE, RELOAD_QUEUE } from './actionTypes';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { addItemToQueueRequest, getQueueRequest, createQueueRequest, deleteItemFromQueueRequest } from '../../requests/serverRequests';
import { setItems, deleteItemByIndex } from '../../reducers/player/actions';
import { setQueueGuid } from '../../reducers/appSettings/actions';
import { ERROR_TOAST } from '../toasters/toasters';
import { showToast } from '../toasters/actions';
import { createUser } from '../appSettings/actions';
import { addItemMiddleware } from '../player/actions';

function* addItemToQueue({item}) {
    const queueGuid = yield select((state) => state.appSettings.queueGuid);
    if(!queueGuid) { 
        console.error('Cannot add item to queue, wrong queue id');
        return; 
    }

    try {
        yield call(addItemToQueueRequest, item, queueGuid);
        yield put(addItemMiddleware(item));
    }
    catch(e) {
        console.error('Error in adding item to queue', e);
    }
}

function* deleteItemFromQueue({index}) {
    const queueGuid = yield select((state) => state.appSettings.queueGuid);
    if(!queueGuid) { 
        console.error('Cannot remove item from queue, wrong queue id');
        return; 
    }

    try {
        yield call(deleteItemFromQueueRequest, index, queueGuid);
        yield put(deleteItemByIndex(index));
    }
    catch(e) {
        console.error('Error in adding item to queue', e);
    }
}

function* createQueue() {
    try {
        const response = yield call(createQueueRequest);
        yield setQueue(response.guid);
    }
    catch(e) {
        yield put(showToast(ERROR_TOAST, 'Shared queue creation failed'));
        console.error('Error in creating queue', e);
    }
}

function* fetchQueue({guid}) {
    let queue=[];
    try {
        queue = yield call(getQueueRequest, guid);
        yield setQueue(guid);
        yield put(setItems(queue.items));
    }
    catch(e) {
        yield put(showToast(ERROR_TOAST, 'Failed to fetch queue'));
        console.error('Failed to fetch queue', e);
    }
}

function* setQueue(guid) {
    yield put(setQueueGuid(guid));
    yield put(createUser());
}

function* reloadQueue() {
    const queueGuid = yield select((state) => state.appSettings.queueGuid);
    const queue = yield call(getQueueRequest, queueGuid);
    yield put(setItems(queue.items));
}

export default function*() {
    yield takeLatest(ADD_ITEM_TO_QUEUE, addItemToQueue);
    yield takeLatest(CREATE_QUEUE, createQueue);
    yield takeLatest(FETCH_QUEUE, fetchQueue);
    yield takeLatest(DELETE_ITEM_FROM_QUEUE, deleteItemFromQueue);
    yield takeLatest(RELOAD_QUEUE, reloadQueue);
}