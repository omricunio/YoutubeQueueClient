import { put, takeEvery } from 'redux-saga/effects';
import { KEY_PRESSED } from './actions/actionTypes';
import keyOptions from './keyOptions';

function* handleKeyPress(action){
    const keyCode = action.payload.keyCode;
    for(const keyOption of keyOptions) {
        for(const [startKey, endKey] of Object.entries(keyOption.keys)){
            if(startKey <= keyCode && endKey >= keyCode){
                yield keyOption.handler();
                if(keyOption.preventsDefault) {
                    action.payload.preventDefault();
                }
                return;
            }
        }
    } 
}

export default function*(){
    yield takeEvery(KEY_PRESSED, handleKeyPress)
}