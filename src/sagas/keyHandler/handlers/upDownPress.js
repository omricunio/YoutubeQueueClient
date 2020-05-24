import { put, select } from 'redux-saga/effects';
import { shiftSelectedSearchedItem } from '../../videoSearch/actions';
import { VOLUME_CHANGE_PERCENTAGE } from '../../../config/config';
import { setVolume } from '../../../reducers/player/actions';
/** 
 * @param { Number } direction
*/
export function* upDownPress(direction){
    const isOpen = yield select((state) => state.videoSearch.isOpen);
    if(isOpen){
        yield put(shiftSelectedSearchedItem(direction));
    }
    else {
        document.activeElement.blur();
        let volume = yield select((state) => state.player.volume);
        volume += VOLUME_CHANGE_PERCENTAGE * direction;
        if(volume > 100) {
            volume = 100;
        }
        else if(volume < 0) {
            volume = 0;
        }
        yield put(setVolume(volume))
    }
}