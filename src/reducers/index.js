import { combineReducers } from 'redux'
import appSettings from "./appSettings/appSettings";
import videoSearch from './videoSearch/videoSearch';
import player from './player/player';

const rootReducer = combineReducers({
    appSettings,
    videoSearch,
    player
});

export default rootReducer;