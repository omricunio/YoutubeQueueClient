import { ADD_NEW_ITEM_MIDDLEWARE } from "./actionTypes";

export function addItemMiddleware(item) {
    return {
        type: ADD_NEW_ITEM_MIDDLEWARE,
        item
    }
}