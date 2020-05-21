import { SHOW_TOAST } from "./actionTypes";

export function showToast(toastType, message) {
    return {
        type: SHOW_TOAST,
        toastType,
        message
    }
}