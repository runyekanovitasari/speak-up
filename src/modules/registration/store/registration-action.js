import * as actionType from './registration-action-type';

export const setCurrentIndex = (data) => {
    return {
        type: actionType.SET_CURRENT_INDEX,
        payload: data,
    };
};

export const updateCurrentIndex = (data, next = true) => {
    let newIndex;
    if (next) {
        newIndex = data + 1;
    } else {
        newIndex = data - 1;
    }
    return (dispatch) => {
        dispatch(setCurrentIndex(newIndex));
    };
};