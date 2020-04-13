import {
    OPEN_VIDEO_SEARCH, 
    CLOSE_VIDEO_SEARCH, 
    CLEAR_SEARCH_VALUE, 
    SEARCH_VALUE_CHANGED, 
    CHANGE_SEARCH_RESULTS,
    CHANGE_SELECTED_SEARCHED_ITEM,
    CHANGE_PLAYED_ITEM_FROM_SEARCH
} from "./actionTypes";
import {INITIAL_STATE} from "./initialState";
import { SEARCH_FIRED } from "../../sagas/videoSearch/actionTypes";

const videoSearch = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_VIDEO_SEARCH:
            return { ...state, isOpen: true }
        case CLOSE_VIDEO_SEARCH:
            return { ...state, isOpen: false, searchValue: "" }
        case SEARCH_VALUE_CHANGED:
            return { ...state, searchValue: action.payload, searchResults: getNonSelectedSearchResults(state) }
        case SEARCH_FIRED: 
            return { ...state, isLoading: true } 
        case CLEAR_SEARCH_VALUE:
            return { ...state, searchValue: "" } 
        case CHANGE_SEARCH_RESULTS:
            action.payload[0].isSelected = true;
            return { ...state, searchResults: action.payload, isLoading: false }
        case CHANGE_SELECTED_SEARCHED_ITEM:
            let searchResults = getNonSelectedSearchResults(state);
            searchResults[action.payload].isSelected = true;
            return { ...state, searchResults: searchResults};
        case CHANGE_PLAYED_ITEM_FROM_SEARCH:
            let results = Object.create(state.searchResults);
            results.forEach((item)=>{item.isPlayed = false});
            if(action.id !== undefined)
            {
                results[action.id].isPlayed = true;
            }
            return { ...state, searchResults: results};
        default:
            return state;
    }
};

function getNonSelectedSearchResults(state) {
    let searchResults = Object.create(state.searchResults);
    searchResults.forEach((item)=>{item.isSelected = false});
    return searchResults;
}

export default videoSearch;