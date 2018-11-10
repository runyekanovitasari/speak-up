import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ListScreen from './../../../src/app/account/list-screen';
import DetailScreen from './../../../src/app/account/detail-screen';
import TransactionScreen from './../../../src/app/transaction/transaction-screen';
import ConfirmationScreen from './../../../src/app/transaction/confirmation-screen';
import ResultScreen from './../../../src/app/transaction/result-screen';
import LoginScreen from './../../../src/app/login/login-screen';
import HomeScreen from './../../../src/app/home/home-screen';
import RegistrationScreen from './../../../src/app/login/registration-screen';
import LogoSplashScreen from './../../../src/app/spashscreen/splash-screen';
import HeaderNavigation from './../components/navigation/HeaderNavigation';
import FooterNavigation from './../components/navigation/FooterNavigation';

const HomeStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen, navigationOptions: { header: () => null } },
  }, {
      navigationOptions: {
        header: () => <HeaderNavigation />,
      },
    });

const HistoryStack = createStackNavigator({
  ListScreen: { screen: ListScreen },
}, {
    navigationOptions: {
      header: () => <HeaderNavigation />,
    },
  });

  const NotifStack = createStackNavigator({
    NotificationScreen: { screen: DetailScreen },
  }, {
      navigationOptions: {
        header: () => <HeaderNavigation />,
      },
    });

    const HelpStack = createStackNavigator({
      HelpScreen: { screen: ConfirmationScreen },
    }, {
        navigationOptions: {
          header: () => <HeaderNavigation />,
        },
      });

    const AccountStack = createStackNavigator({
      AccountScreen: { screen: DetailScreen },
    }, {
        navigationOptions: {
          header: () => <HeaderNavigation />,
        },
      });
const HomeScreenFooterTab = createBottomTabNavigator(
  {
    HomeScreen: { screen: HomeStack },
    HistoryScreen: { screen: HistoryStack },
    NotificationScreen: { screen: NotifStack },
    HelpScreen: { screen: HelpStack },
    AccountScreen: { screen: AccountStack },
  },
  {
    tabBarComponent: FooterNavigation,
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
  HomeScreen: { screen: HomeScreenFooterTab },
  LogoSplashScreen: { screen: LogoSplashScreen, navigationOptions: { header: () => null } },
};

export default rootNavigationConfig;