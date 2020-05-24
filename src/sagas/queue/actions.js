import { ADD_ITEM_TO_QUEUE, CREATE_QUEUE, FETCH_QUEUE, DELETE_ITEM_FROM_QUEUE, RELOAD_QUEUE } from "./actionTypes";

export function addItemToQueue(item) {
    return {
        type: ADD_ITEM_TO_QUEUE,
        item
    }
}

export function createQueue() {
    return {
        type: CREATE_QUEUE
    }
}

export function fetchAndSetQueue(guid) {
    return {
        type: FETCH_QUEUE,
        guid
    }
}

export function reloadQueue() {
    return {
        type: RELOAD_QUEUE
    }
}

export function deleteItemFromQueue(index) {
    return { 
        type: DELETE_ITEM_FROM_QUEUE,
        index
    }
}