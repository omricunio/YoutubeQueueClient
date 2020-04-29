import keyHandler from './keyHandler/index';
import videoSearchSaga from './videoSearch/index';
import queueUpdaterSaga from './queue/index';
import toastersSaga from './toasters/index';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([videoSearchSaga(), keyHandler(), queueUpdaterSaga(), toastersSaga()])
}   