import { takeLatest, call, put, select, takeEvery } from 'redux-saga/effects';
import { SEARCH_VALUE_CHANGED } from '../../reducers/videoSearch/actionTypes';
import YoutubeSearch from '../../requests/YoutubeSearch/YoutubeSearch';
import { changeSearchResults, changeSelectedSearchedItem } from '../../reducers/videoSearch/actions';
import { SHIFT_SELECTED_SEARCHED_ITEM, SET_CURRENT_PLAYING_ITEM_BY_ID } from './actionTypes';
import { setCurrentItem } from '../../reducers/player/actions';
const youtubeSearch = new YoutubeSearch();

function* searchMatches(action) {
    let items=[];
    try {
        items = yield call(youtubeSearch.searchByQuery, action.payload);
    }
    catch(e) {
        console.log('Error searching youtube', e);
    }
    yield put(changeSearchResults(items))
}

function* shiftSelectedSearchedItem(action) {
    const delta = (action.payload)*-1;
    const items = yield select((state) => state.videoSearch.searchResults);
    if(items.length > 1){
        const selectedItemIndex = items.findIndex((item)=>item.isSelected===true);
        const newIndex = selectedItemIndex + delta;
        if(selectedItemIndex < 0) {
            yield put(changeSelectedSearchedItem(0));
        }
        else if(newIndex >= 0 && newIndex < items.length) {
            yield put(changeSelectedSearchedItem(newIndex));
        }
    }
}

function* setCurrentPlayingItemById(action) {
    const itemId = action.payload;
    const items = yield select((state) => state.videoSearch.searchResults);
    const item = items[itemId];

    yield put(setCurrentItem(item));
}

export default function*() {
    yield takeLatest(SEARCH_VALUE_CHANGED, searchMatches);
    yield takeEvery(SHIFT_SELECTED_SEARCHED_ITEM, shiftSelectedSearchedItem);
    yield takeEvery(SET_CURRENT_PLAYING_ITEM_BY_ID, setCurrentPlayingItemById);
}