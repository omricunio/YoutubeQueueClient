import {SET_PROGRESS, SET_VOLUME, SET_BUFFER, TOGGLE_PLAYING_STATE, SET_CURRENT_ITEM, ADD_NEW_ITEM, SKIP_CURRENT_ITEM, DELETE_ITEM_BY_INDEX, TOGGLE_PLAYER_OPEN_STATE} from "./actionTypes";

export function setProgress(payload) {
    return {
        type: SET_PROGRESS,
        payload
    }
}

export function setVolume(volume) {
    return {
        type: SET_VOLUME,
        volume
    }
}

export function setBuffer(payload) {
    return {
        type: SET_BUFFER,
        payload
    }
}

export function togglePlayingState(payload) {
    return {
        type: TOGGLE_PLAYING_STATE,
        payload
    }
}

export function setCurrentItem(payload) {
    return {
        type: SET_CURRENT_ITEM,
        payload
    }
}

export function skipCurrentItem() {
    return {
        type: SKIP_CURRENT_ITEM
    }
}

export function addItem(item, position=null) {
    return {
        type: ADD_NEW_ITEM,
        item,
        position
    }
}

export function deleteItemByIndex(index) {
    return {
        type: DELETE_ITEM_BY_INDEX,
        index
    }
}

export function togglePlayerOpenState(isOpen) {
    return {
        type: TOGGLE_PLAYER_OPEN_STATE,
        isOpen
    }
}