import { CREATE_QUEUE } from "../player/actionTypes";

export function createQueue(guid) {
    return {
        type: CREATE_QUEUE,
        guid
    }
}