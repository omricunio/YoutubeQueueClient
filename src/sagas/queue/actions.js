import { ADD_ITEM_TO_QUEUE, CREATE_QUEUE, FETCH_QUEUE } from "./actionTypes";

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