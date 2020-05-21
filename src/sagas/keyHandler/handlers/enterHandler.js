import { put } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';
import { addItemAndCloseSearch } from '../../videoSearch/actions';

export function* handleEnterPress(){
    const isVideoSearch = yield select((state) => state.videoSearch.isOpen);
    if(isVideoSearch){
        const items = yield select((state) => state.videoSearch.searchResults);
        const selectedItemIndex = items.findIndex((item)=>item.isSelected===true);
        if(selectedItemIndex !== -1) {
            yield put(addItemAndCloseSearch(selectedItemIndex));
        }
    }
}