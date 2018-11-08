import * as actionType from './registration-action-type';

const initialState = {
    currentIndex: 0,
};

const RegistrationReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.SET_CURRENT_INDEX:
            return { ...state, currentIndex: payload };
        default:
            return state;
    }
};

export default RegistrationReducer;