import * as actionType from './popup-action-type';

export const setVisibleAlert = (data) => {
    return {
        type: actionType.SET_VISIBLE_ALERT,
        payload: data,
    };
};

export const setButtonTextAlert = (data) => {
    return {
        type: actionType.SET_BUTTON_TEXT_ALERT,
        payload: data,
    };
};

export const setEventsAlert = (data) => {
    return {
        type: actionType.SET_EVENTS_ALERT,
        payload: data,
    };
};

export const setVisibleConfirm = (data) => {
    return {
        type: actionType.SET_VISIBLE_CONFIRM,
        payload: data,
    };
};

export const setButtonTextPositive = (data) => {
    return {
        type: actionType.SET_BUTTON_TEXT_POSITIVE,
        payload: data,
    };
};

export const setButtonTextNegative = (data) => {
    return {
        type: actionType.SET_BUTTON_TEXT_NEGATIVE,
        payload: data,
    };
};

export const setEventsConfirmPositive = (data) => {
    return {
        type: actionType.SET_EVENTS_CONFIRM_POSITIVE,
        payload: data,
    };
};

export const setEventsConfirmNegative = (data) => {
    return {
        type: actionType.SET_EVENTS_CONFIRM_NEGATIVE,
        payload: data,
    };
};

export const setVisibleProgress = (data) => {
    return {
        type: actionType.SET_VISIBLE_PROGRESS,
        payload: data,
    };
};

export const setTitle = (data) => {
    return {
        type: actionType.SET_TITLE,
        payload: data,
    };
};

export const setMessage = (data) => {
    return {
        type: actionType.SET_MESSAGE,
        payload: data,
    };
};

export const showAlert = (message = '', title = '', buttonText = '', events = () => {}) => {
    return (dispatch) => {
        dispatch(setMessage(message));
        dispatch(setTitle(title));
        dispatch(setButtonTextAlert(buttonText));
        dispatch(setEventsAlert(events));
        dispatch(setVisibleAlert(true));
    };
};

export const showConfirmDialog = (message = '', title = '', buttonTextPositive = '', buttonTextNegative = '', onClickPositiveButton = () => {}, onClickNegativeButton = () => {}) => {
    return (dispatch) => {
        dispatch(setMessage(message));
        dispatch(setTitle(title));
        dispatch(setButtonTextPositive(buttonTextPositive));
        dispatch(setButtonTextNegative(buttonTextNegative));
        dispatch(setEventsConfirmPositive(onClickPositiveButton));
        dispatch(setEventsConfirmNegative(onClickNegativeButton));
        dispatch(setVisibleConfirm(true));
    };
};

export const showProgressDialog = (message = '', title = '') => {
    return (dispatch) => {
        dispatch(setMessage(message));
        dispatch(setTitle(title));
        dispatch(setVisibleProgress(true));
    };
};

export const dismissAlert = () => {
    return (dispatch) => {
        dispatch(setTitle(''));
        dispatch(setMessage(''));
        dispatch(setVisibleAlert(false));
    };
};

export const dismissConfirmDialog = () => {
    return (dispatch) => {
        dispatch(setTitle(''));
        dispatch(setMessage(''));
        dispatch(setVisibleConfirm(false));
    };
};

export const dismissProgressDialog = () => {
    return (dispatch) => {
        dispatch(setTitle(''));
        dispatch(setMessage(''));
        dispatch(setVisibleProgress(false));
    };
};