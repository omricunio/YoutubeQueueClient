import { put } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';
import { addItem } from '../../../reducers/player/actions';
import { closeVideoSearch } from '../../../reducers/videoSearch/actions';

export function* handleEnterPress(){
    const isVideoSearch = yield select((state) => state.videoSearch.isOpen);
    if(isVideoSearch){
        const items = yield select((state) => state.videoSearch.searchResults);
        const selectedItem = items.find((item)=>item.isSelected===true);
        if(selectedItem) {
            yield put(addItem(selectedItem));
            yield put(closeVideoSearch());
        }
    }
}