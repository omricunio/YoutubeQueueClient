import { takeLatest, call, put, select, takeEvery } from 'redux-saga/effects';
import YoutubeSearch from '../../requests/YoutubeSearch/YoutubeSearch';
import { changeSearchResults, changeSelectedSearchedItem, changePlayedItemFromSearch, closeVideoSearch } from '../../reducers/videoSearch/actions';
import { SHIFT_SELECTED_SEARCHED_ITEM, SET_CURRENT_PLAYING_ITEM_BY_ID, PAUSE_PLAYED_ITEM_IN_SEARCH, ADD_ITEM_TO_QUEUE_BY_SEARCH_INDEX, ADD_ITEM_AND_CLOSE_SEARCH, SEARCH_FIRED } from './actionTypes';
import { setCurrentItem, togglePlayingState, addItem } from '../../reducers/player/actions';
const youtubeSearch = new YoutubeSearch();

function* searchMatches() {
    const searchValue = yield select((state) => state.videoSearch.searchValue);
    let items=[];
    try {
        items = yield call(youtubeSearch.searchByQuery, searchValue);
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
    yield put(changePlayedItemFromSearch(itemId));
    yield put(togglePlayingState(true));
}

function* addItemToQueueBySearchIndex(action) {
    const items = yield select((state) => state.videoSearch.searchResults);
    const itemToAdd = items[action.index];
    yield put(addItem(itemToAdd));
}

function* addItemAndCloseSearch(action) {
    yield addItemToQueueBySearchIndex(action);
    yield put(closeVideoSearch());
}

function* pausePlayedItemInSearch() {
    yield put(changePlayedItemFromSearch());
    yield put(togglePlayingState(false));
}

export default function*() {
    yield takeLatest(SEARCH_FIRED, searchMatches);
    yield takeEvery(SHIFT_SELECTED_SEARCHED_ITEM, shiftSelectedSearchedItem);
    yield takeEvery(SET_CURRENT_PLAYING_ITEM_BY_ID, setCurrentPlayingItemById);
    yield takeEvery(PAUSE_PLAYED_ITEM_IN_SEARCH, pausePlayedItemInSearch);
    yield takeEvery(ADD_ITEM_TO_QUEUE_BY_SEARCH_INDEX, addItemToQueueBySearchIndex);
    yield takeEvery(ADD_ITEM_AND_CLOSE_SEARCH, addItemAndCloseSearch);
}