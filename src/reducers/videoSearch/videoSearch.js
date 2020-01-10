import {OPEN_VIDEO_SEARCH, CLOSE_VIDEO_SEARCH} from "./actionTypes";
import {INITIAL_STATE} from "./initialState";

const videoSearch = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_VIDEO_SEARCH:
            return { ...state, isOpen: true }
        case CLOSE_VIDEO_SEARCH:
            return { ...state, isOpen: false }            
        default:
            return state;
    }
};

export default videoSearch;