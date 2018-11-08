import { combineReducers } from 'redux';
import { AtiNavigationReducer } from 'ati-navigation';
import { reducer as i18n } from 'ati-react-native-redux-i18n';
import { formReducer } from 'ati-redux-form';
import navHeaderReducer from './navHeaderReducer';
import navigationReducer from './../../navigation/reducer';
import PopupReducer from './../../../modules/popup/store/popup-reducer';
import TransactionReducer from './../../../../src/modules/transaction/store/transaction-reducer';
import RegistrationReducer from './../../../../src/modules/registration/store/registration-reducer';
import AuthenticationReducer from './../../../../src/modules/authentication/store/authentication-reducer';
import AccountReducer from './../../../../src/modules/account/store/account-reducer';

const appReducers = combineReducers({
    navHeader: navHeaderReducer,
    nav: navigationReducer,
    AtiNavigationReducer,
    i18n,
    form: formReducer,
    popup: PopupReducer,
transaction: TransactionReducer,
registration: RegistrationReducer,
auth: AuthenticationReducer,
account: AccountReducer,
});

export default appReducers;
