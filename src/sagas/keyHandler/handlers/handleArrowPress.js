import { put, select } from 'redux-saga/effects';
import { shiftSelectedSearchedItem } from '../../videoSearch/actions';
/** 
 * @param { Number } delta
*/
export function* handleArrowPress(delta){
    const isOpen = yield select((state) => state.videoSearch.isOpen);
    if(isOpen){
        yield put(shiftSelectedSearchedItem(delta));
    }
}