import { KEY_PRESSED } from './actionTypes';

export function keyPressed(payload) {
    return {
        type: KEY_PRESSED,
        payload: payload
    }
}