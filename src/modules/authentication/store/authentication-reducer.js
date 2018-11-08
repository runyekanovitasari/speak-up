import * as actionType from './authentication-action-type';

const initState = {
    loginData: {},
};

export default (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.SET_LOGIN_DATA:
            return { ...state, loginData: payload.body };
        default:
            return state;
    }
};
