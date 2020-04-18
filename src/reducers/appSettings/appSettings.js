import {TOGGLE_DARK_MODE, SET_QUEUE_GUID} from "./actionTypes";
import {INITIAL_STATE} from "./initialState";

const appSettings = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            if(state.theme === 'dark'){
                return {...state, theme: 'light'};
            }
            else if(state.theme === 'light')
            {
                return {...state, theme: 'dark'};
            }
            return state;
        case SET_QUEUE_GUID:
            return {...state, queueGuid: action.guid}
        default:
            return state;
    }
};

export default appSettings;