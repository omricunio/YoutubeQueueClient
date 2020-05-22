import { CREATE_USER } from './actionTypes';
import { put, takeLatest, select, call } from 'redux-saga/effects';
import { showToast } from '../toasters/actions';
import { setUserId } from '../../reducers/appSettings/actions';
import { ERROR_TOAST } from '../toasters/toasters';
import { serverInstance } from '../../requests/instances';
import { listenToQueueEvents } from '../../utils/socketListener';
import { createUserRequest } from '../../requests/serverRequests';

function* createUser() {
    try {
        const queueGuid = yield select((state) => state.appSettings.queueGuid);
        const userId = yield call(createUserRequest);

        yield call(listenToQueueEvents, queueGuid, userId);
        serverInstance.defaults.headers.common["Authorization"] = userId;
        yield put(setUserId(userId));
        
    }
    catch(e) {
        yield put(showToast(ERROR_TOAST, 'Failed to fetch user id'));
        console.error('Failed to fetch user id', e);
    }
}

export default function*() {
    yield takeLatest(CREATE_USER, createUser);
}