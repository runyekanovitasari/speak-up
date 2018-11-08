import * as actionType from './popup-action-type';

const initialState = {
    visibleAlert: false,
    buttonTextAlert: '',
    visibleConfirm: false,
    buttonTextPositive: '',
    buttonTextNegative: '',
    visibleProgress: false,
    title: '',
    message: '',
};

const PopupReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.SET_TITLE:
            return { ...state, title: payload };
        case actionType.SET_MESSAGE:
            return { ...state, message: payload };
        case actionType.SET_VISIBLE_ALERT:
            return { ...state, visibleAlert: payload };
        case actionType.SET_BUTTON_TEXT_ALERT:
            return { ...state, buttonTextAlert: payload };
        case actionType.SET_EVENTS_ALERT:
            return { ...state, eventsAlert: payload };
        case actionType.SET_VISIBLE_CONFIRM:
            return { ...state, visibleConfirm: payload };
        case actionType.SET_BUTTON_TEXT_POSITIVE:
            return { ...state, buttonTextPositive: payload };
        case actionType.SET_BUTTON_TEXT_NEGATIVE:
            return { ...state, buttonTextNegative: payload };
        case actionType.SET_EVENTS_CONFIRM_POSITIVE:
            return { ...state, eventsConfirmPositive: payload };
        case actionType.SET_EVENTS_CONFIRM_NEGATIVE:
            return { ...state, eventsConfirmNegative: payload };
        case actionType.SET_VISIBLE_PROGRESS:
            return { ...state, visibleProgress: payload };
        default:
            return state;
    }
};

export default PopupReducer;