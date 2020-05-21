import { toast } from "react-toastify";

export const ERROR_TOAST = 'ERROR_TOAST';

export const toastTypeToToaster = {
    [ERROR_TOAST]: (message) => {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}