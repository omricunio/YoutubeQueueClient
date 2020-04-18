import { FETCH_QUEUE } from "./actionTypes";

export function fetchQueue(guid) {
    return {
        type: FETCH_QUEUE,
        guid
    }
}