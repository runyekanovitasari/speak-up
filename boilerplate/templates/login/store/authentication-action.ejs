import * as actionType from './authentication-action-type';

export const setLoginData = (data) => {
    return {
        type: actionType.SET_LOGIN_DATA,
        payload: data,
    };
};

/* this function used to invoke webconsole for processing login. With format parameter from pocket-login-screen. */
export const login = (webConsole, request, navigate, showAlert, dismissProgressDialog) => (dispatch) => {
    webConsole
        .auth('login', request)
        .then((success) => {
            dismissProgressDialog();
            console.log('success login ', success);
            dispatch(setLoginData(success));
            // will navigate to link HomeScreen if the response API success
            navigate('HomeScreen');
        }, (err) => {
            dismissProgressDialog();
            console.log('failed login ', err);
            // showAlert is a function for display popUp with the response message from API
            showAlert('apiResponse.'.concat(err.errCode));
        });
};


/* this function used to invoke webconsole for processing logout. With format parameter from HeaderNavigation. */
export const logout = (webConsole, request, navigate, showAlert, showConfirmDialog, showProgressDialog, dismissProgressDialog) => (dispatch) => {
    showConfirmDialog('message.logout', 'label.logout', '', '', () => {
        showProgressDialog();
        webConsole.nonfin('logoutRequest', request, true)
            .then((success) => {
                dismissProgressDialog();
                console.log('success logout', success);
                webConsole.actions.removeToken();
                // dispatch data from response login used for logout
                dispatch(setLoginData({}));
                // will navigate to screen LoginScreen, if the response API success
                navigate('LoginScreen');
            }, (err) => {
                dismissProgressDialog();
                console.log('failed logout ', err);
                showAlert('apiResponse.'.concat(err.errCode));
            });
    });
};