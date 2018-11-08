import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import ListScreen from './../../../src/app/account/list-screen';
import DetailScreen from './../../../src/app/account/detail-screen';
import TransactionScreen from './../../../src/app/transaction/transaction-screen';
import ConfirmationScreen from './../../../src/app/transaction/confirmation-screen';
import ResultScreen from './../../../src/app/transaction/result-screen';
import RegistrationScreen from './../../../src/app/registration/registration-screen';
import LoginScreen from './../../../src/app/login/login-screen';
import HomeScreen from './../../../src/app/home/home-screen';
import HeaderNavigation from './../components/navigation/HeaderNavigation';
import SideMenuNavigation from './../components/navigation/SideMenuNavigation';

const HomeScreenStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen, navigationOptions: { header: () => null } },
  }, {
      navigationOptions: {
        header: () => <HeaderNavigation />,
      },
    });
const HomeScreenDrawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreenStack,
    },
    // If you want add some menu in drawer (side menu), you can put the list of screen below.
    // example :
    // Account: {
    //    screen: accountListStack,
    // },
    // Transaction: {
    //    screen: transactionListStack,
    // },
  },
  {
    contentComponent: SideMenuNavigation,
    drawerWidth: 275,
  },
);

const rootNavigationConfig = {
ListScreen: { screen: ListScreen },
DetailScreen: { screen: DetailScreen },
  TransactionScreen: { screen: TransactionScreen },
  ConfirmationScreen: { screen: ConfirmationScreen },
  ResultScreen: { screen: ResultScreen },
  RegistrationScreen: { screen: RegistrationScreen, navigationOptions: { header: () => null } },
  LoginScreen: { screen: LoginScreen, navigationOptions: { header: () => null } },
  HomeScreen: { screen: HomeScreenDrawer },
};

export default rootNavigationConfig;