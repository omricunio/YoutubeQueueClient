import { put, select } from 'redux-saga/effects';
import { setCurrentPlayingItemById, pausePlayedItemInSearch } from '../../videoSearch/actions';

export function* handleAltPress(){
    const isVideoSearchOpen = yield select((state) => state.videoSearch.isOpen);
    if(isVideoSearchOpen){
        const items = yield select((state) => state.videoSearch.searchResults);
        const selectedItemIndex = items.findIndex((item)=>item.isSelected===true);
        if(selectedItemIndex !== -1) {
            if(items[selectedItemIndex].isPlayed)
            {
                yield put(pausePlayedItemInSearch());
            }
            else
            {
                yield put(setCurrentPlayingItemById(selectedItemIndex));
            }
        }
    }
}