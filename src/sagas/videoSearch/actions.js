import { SHIFT_SELECTED_SEARCHED_ITEM } from './actionTypes';

export function shiftSelectedSearchedItem(payload) {
    return {
        payload,
        type: SHIFT_SELECTED_SEARCHED_ITEM
    }
}