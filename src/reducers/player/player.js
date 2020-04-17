import {SET_PROGRESS, SET_BUFFER, TOGGLE_PLAYING_STATE, SET_CURRENT_ITEM, ADD_NEW_ITEM, SKIP_CURRENT_ITEM, DELETE_ITEM_BY_INDEX, TOGGLE_PLAYER_OPEN_STATE, SET_VOLUME} from "./actionTypes";
import {INITIAL_STATE} from "./initialState";

const player = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PROGRESS:
            return {...state, progress: action.payload}
        case SET_BUFFER:
            return {...state, buffer: action.payload}
        case SET_VOLUME:
            return {...state, volume: action.volume}
        case TOGGLE_PLAYING_STATE:
            if(action.payload !== undefined) {
                return {...state, playingState: action.payload}
            }
            else {
                return {...state, playingState: !state.playingState}
            }
        case SET_CURRENT_ITEM:
            return {...state, currentItem: action.payload}
        case ADD_NEW_ITEM:
            let items = Object.create(state.items);
            if(action.position) {
                items.splice(action.position, action.item);
            }
            else {
                if(state.currentItem) {
                    items.push(action.item);
                    return {...state, items}
                }
                else {
                    return {...state, currentItem: action.item}
                }
            }
            return {...state, items}
        case SKIP_CURRENT_ITEM: {
            let items = Object.create(state.items);
            if(items.length > 0){
                const newCurrentItem = items.shift();
                return {...state, currentItem: newCurrentItem, items, progress: 0, buffer: 0}
            }
            return {...state}
        }
        case DELETE_ITEM_BY_INDEX: {
            let items = Object.create(state.items);
            items.splice(action.index,1);
            return {...state, items}
        }
        case TOGGLE_PLAYER_OPEN_STATE: {
            if(action.isOpen !== undefined) {
                return {...state, isOpen: state.isOpen }
            }
            return {...state, isOpen: !state.isOpen}
        }
        default:
            return state;
    }
};

export default player;