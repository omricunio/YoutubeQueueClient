import {
    OPEN_VIDEO_SEARCH, 
    CLOSE_VIDEO_SEARCH, 
    CLEAR_SEARCH_VALUE, 
    SEARCH_VALUE_CHANGED, 
    CHANGE_SEARCH_RESULTS,
    CHANGE_SELECTED_SEARCHED_ITEM
} from "./actionTypes";
import {INITIAL_STATE} from "./initialState";

const videoSearch = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_VIDEO_SEARCH:
            return { ...state, isOpen: true }
        case CLOSE_VIDEO_SEARCH:
            return { ...state, isOpen: false, searchValue: "" }
        case SEARCH_VALUE_CHANGED:
            return { ...state, searchValue: action.payload, isLoading: true } 
        case CLEAR_SEARCH_VALUE: 
            return { ...state, searchValue: "" } 
        case CHANGE_SEARCH_RESULTS:
            return { ...state, searchResults: action.payload, isLoading: false }
        case CHANGE_SELECTED_SEARCHED_ITEM:
            let searchResults = Object.create(state.searchResults);
            searchResults.forEach((item)=>{item.isSelected = false});
            searchResults[action.payload].isSelected = true
            return { ...state, searchResults: searchResults};
        default:
            return state;
    }
};

export default videoSearch;