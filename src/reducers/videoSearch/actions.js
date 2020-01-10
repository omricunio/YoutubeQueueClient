import { OPEN_VIDEO_SEARCH, CLOSE_VIDEO_SEARCH } from "./actionTypes";

export function openVideoSearch() {
    return {
        type: OPEN_VIDEO_SEARCH,
    }
}

export function closeVideoSearch() {
    return {
        type: CLOSE_VIDEO_SEARCH,
    }
}