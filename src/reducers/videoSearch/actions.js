import { OPEN_VIDEO_SEARCH, CLOSE_VIDEO_SEARCH, CLEAR_SEARCH_VALUE, SEARCH_VALUE_CHANGED, CHANGE_SEARCH_RESULTS, CHANGE_SELECTED_SEARCHED_ITEM, CHANGE_PLAYED_ITEM_FROM_SEARCH } from "./actionTypes";

export function openVideoSearch() {
    return {
        type: OPEN_VIDEO_SEARCH,
    }
}

export function closeVideoSearch() {
    return {
        type: CLOSE_VIDEO_SEARCH,
    }
}

export function clearSearchValue() {
    return {
        type: CLEAR_SEARCH_VALUE
    }
}

export function searchValueChanged(payload) {
    return {
        type: SEARCH_VALUE_CHANGED,
        payload: payload
    }
}

export function changeSearchResults(payload) {
    return {
        type: CHANGE_SEARCH_RESULTS,
        payload: payload
    }
}

export function changePlayedItemFromSearch(id) {
    return {
        type: CHANGE_PLAYED_ITEM_FROM_SEARCH,
        id
    }
}

export function changeSelectedSearchedItem(payload) {
    return {
        type: CHANGE_SELECTED_SEARCHED_ITEM,
        payload: payload
    }
}