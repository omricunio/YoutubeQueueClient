import { SHIFT_SELECTED_SEARCHED_ITEM, SET_CURRENT_PLAYING_ITEM_BY_ID, PAUSE_PLAYED_ITEM_IN_SEARCH, ADD_ITEM_BY_SEARCH_INDEX, ADD_ITEM_AND_CLOSE_SEARCH, SEARCH_FIRED } from './actionTypes';

export function shiftSelectedSearchedItem(payload) {
    return {
        payload,
        type: SHIFT_SELECTED_SEARCHED_ITEM
    }
}

export function setCurrentPlayingItemById(payload) {
    return {
        payload,
        type: SET_CURRENT_PLAYING_ITEM_BY_ID
    }
}

export function pausePlayedItemInSearch(id) {
    return {
        id,
        type: PAUSE_PLAYED_ITEM_IN_SEARCH
    }
}

export function addItemToQueueBySearchIndex(index) {
    return {
        index,
        type: ADD_ITEM_BY_SEARCH_INDEX
    }
}

export function addItemAndCloseSearch(index) {
    return {
        index,
        type: ADD_ITEM_AND_CLOSE_SEARCH
    }
}

export function searchFired() {
    return {
        type: SEARCH_FIRED
    }
}