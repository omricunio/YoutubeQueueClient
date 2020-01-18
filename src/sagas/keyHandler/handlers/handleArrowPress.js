import { put, select } from 'redux-saga/effects';
import { shiftSelectedSearchedItem } from '../../videoSearch/actions';
/** 
 * @param { Number } delta
*/
export function* handleArrowPress(delta){
    const isOpen = yield select((state) => state.videoSearch.isOpen);
    if(isOpen){
        document.activeElement.blur();
        yield put(shiftSelectedSearchedItem(delta));
    }
}