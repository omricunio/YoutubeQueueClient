import {SET_PROGRESS, SET_BUFFER, TOGGLE_PLAYING_STATE, SET_CURRENT_ITEM, ADD_NEW_ITEM} from "./actionTypes";
import {INITIAL_STATE} from "./initialState";

const player = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PROGRESS:
            return {...state, progress: action.payload}
        case SET_BUFFER:
            return {...state, buffer: action.payload}
        case TOGGLE_PLAYING_STATE:
            if(action.payload) {
                return {...state, playingState: action.payload}
            }
            else {
                return {...state, playingState: !state.playingState}
            }
        case SET_CURRENT_ITEM:
            return {...state, currentItem: action.payload}
        case ADD_NEW_ITEM:
            if(action.position) {
                state.items.splice(action.position, action.item);
            }
            else {
                state.items.push(action.item);
            }
            return {...state}
        default:
            return state;
    }
};

export default player;