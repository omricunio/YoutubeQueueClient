import keyHandler from './keyHandler/index';

export default function* rootSaga() {
    yield keyHandler()
}   