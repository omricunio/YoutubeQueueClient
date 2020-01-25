import { put, select } from 'redux-saga/effects';
import { setCurrentPlayingItemById } from '../../videoSearch/actions';

export function* handlePPress(){
    const isVideoSearchOpen = yield select((state) => state.videoSearch.isOpen);
    if(isVideoSearchOpen){
        const items = yield select((state) => state.videoSearch.searchResults);
        const selectedItemIndex = items.findIndex((item)=>item.isSelected===true);
        if(selectedItemIndex !== -1) {
            yield put(setCurrentPlayingItemById(selectedItemIndex));
        }
    }
}