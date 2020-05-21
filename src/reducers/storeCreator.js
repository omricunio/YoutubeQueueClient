import rootReducer from "./index";
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
export default function storeCreator() {
    const sagaMiddleware = createSagaMiddleware();
    const toCompose = [applyMiddleware(sagaMiddleware)];
    window.__REDUX_DEVTOOLS_EXTENSION__ && toCompose.push(window.__REDUX_DEVTOOLS_EXTENSION__({trace: true}));
    const store = createStore(rootReducer,
        compose(
            ...toCompose
        )
    );

    sagaMiddleware.run(rootSaga)
    return store;
}