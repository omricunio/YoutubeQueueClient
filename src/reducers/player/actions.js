import {SET_PROGRESS, SET_BUFFER, TOGGLE_PLAYING_STATE, SET_CURRENT_ITEM, ADD_NEW_ITEM} from "./actionTypes";

export function setProgress(payload) {
    return {
        type: SET_PROGRESS,
        payload
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

export function addItem(item, position=null) {
    return {
        type: ADD_NEW_ITEM,
        item,
        position
    }
}