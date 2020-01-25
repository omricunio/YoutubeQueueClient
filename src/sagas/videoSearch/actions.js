import { SHIFT_SELECTED_SEARCHED_ITEM, SET_CURRENT_PLAYING_ITEM_BY_ID } from './actionTypes';

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