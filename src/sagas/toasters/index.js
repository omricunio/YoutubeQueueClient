import { SHOW_TOAST } from './actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { toastTypeToToaster } from './toasters';

function showToast({toastType, message}) {
    toastTypeToToaster[toastType](message);
}

export default function*() {
    yield takeLatest(SHOW_TOAST, showToast);
}