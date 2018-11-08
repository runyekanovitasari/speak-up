import { createStackNavigator } from 'react-navigation';
import React from 'react';
import rootNavigationConfig from './rootNavigationStackConfig';
import HeaderNavigation from './../components/navigation/HeaderNavigation';

const RootStackNavigation = createStackNavigator(
    { ...rootNavigationConfig },
    {
    navigationOptions: {
        header: () => {
            return <HeaderNavigation />;
        },
    },
},
);

export default RootStackNavigation;