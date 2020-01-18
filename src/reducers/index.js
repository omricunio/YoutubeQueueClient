import { combineReducers } from 'redux'
import appSettings from "./appSettings/appSettings";
import videoSearch from './videoSearch/videoSearch';

const rootReducer = combineReducers({
    appSettings,
    videoSearch
});

export default rootReducer;