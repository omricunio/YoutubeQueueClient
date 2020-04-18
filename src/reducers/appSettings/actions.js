import {TOGGLE_DARK_MODE, SET_QUEUE_GUID} from "./actionTypes";

export function toggleDarkMode() {
    return {
        type: TOGGLE_DARK_MODE,
    }
}

export function setQueueGuid(guid) {
    return {
        type: SET_QUEUE_GUID,
        guid
    }
}