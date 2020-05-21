import { closeVideoSearch } from '../../../reducers/videoSearch/actions';
import { put } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';

export function* handleEscapePress(){
    const isOpen = yield select((state) => state.videoSearch.isOpen);
    if(isOpen){
        yield put(closeVideoSearch())
    }
}