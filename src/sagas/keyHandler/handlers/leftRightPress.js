import { put, select } from 'redux-saga/effects';
import { PROGRESS_CHANGE_PERCENTAGE } from '../../../config/config';
import { setProgress } from '../../../reducers/player/actions';
/** 
 * @param { Number } direction
*/
export function* leftRightPress(direction){
    const isOpen = yield select((state) => state.videoSearch.isOpen);
    if(!isOpen){
        document.activeElement.blur();
        let progress = yield select((state) => state.player.progress);
        progress += PROGRESS_CHANGE_PERCENTAGE * direction;
        if(progress > 100) {
            progress = 100;
        }
        else if(progress < 0) {
            progress = 0;
        }
        yield put(setProgress(progress))
    }
}