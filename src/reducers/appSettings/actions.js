import {TOGGLE_DARK_MODE, SET_QUEUE_GUID, SET_USER_ID} from "./actionTypes";

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

export function setUserId(userId) {
    return {
        type: SET_USER_ID,
        userId
    }
}