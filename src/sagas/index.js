import keyHandler from './keyHandler/index';
import videoSearchSaga from './videoSearch/index';
import playerSaga from './player/index';
import appSettingsSaga from './appSettings/index';

import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([videoSearchSaga(), keyHandler(), playerSaga(), appSettingsSaga()])
}   