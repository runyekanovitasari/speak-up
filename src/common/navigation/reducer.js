import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from './RootStackNavigation';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('LoginScreen'));

const navReducer = (state = initialState, action) => {
const nextState = AppNavigator.router.getStateForAction(action, state);

// Simply return the original `state` if `nextState` is null or undefined.
return nextState || state;
};
export default navReducer;