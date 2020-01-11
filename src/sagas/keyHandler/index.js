import { put, takeEvery } from 'redux-saga/effects';
import { KEY_PRESSED } from './actions/actionTypes';
import keyOptions from './keyOptions';

function* handleKeyPress(action){
    const keyCode = action.payload.keyCode;
    for(const keyOption of keyOptions) {
        if(keyOption.startKey <= keyCode && keyOption.endKey >= keyCode){
            yield keyOption.handler();
            return;
        }
    } 
}

export default function*(){
    yield takeEvery(KEY_PRESSED, handleKeyPress)
}