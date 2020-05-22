import { ADD_NEW_ITEM_MIDDLEWARE } from './actionTypes';
import { put, takeEvery, select } from 'redux-saga/effects';
import { addItem, skipCurrentItem } from '../../reducers/player/actions';

function* addNewItemMiddleware({item}) {
    const progress = yield select((state) => state.player.progress);
    const playingState = yield select((state) => state.player.playingState);

    yield put(addItem(item));

    if(progress === 100 && playingState) {
        yield put(skipCurrentItem());
    }
}

export default function*() {
    yield takeEvery(ADD_NEW_ITEM_MIDDLEWARE, addNewItemMiddleware);
}