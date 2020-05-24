import { put } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';
import { togglePlayingState } from '../../../reducers/player/actions';

export function* handleSpacePress(){
    const isOpen = yield select((state) => state.videoSearch.isOpen);
    if(!isOpen){
        document.activeElement.blur();
        yield put(togglePlayingState())
    }
}