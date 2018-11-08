/**
 * Sample Anabatic Mobile Framework
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { AtiWebConsoleProvider } from 'ati-web-console-connector';
import storeCreator from './../common/store';
import navigatorCreator from './../common/navigation';
import appReducers from './../common/store/reducer';
import CentralizedPopup from './../modules/popup/container/centralized-popup';
import { ColorProperties } from './../../assets/js';
import I18n from './../common/i18n';

const navigator = navigatorCreator();
const store = storeCreator(appReducers, navigator.middleware);


const services = [
  {
    name: 'nonfin',
    contextPath: '/apps/1/pbNonFinancialAdapter',
  },
  {
    name: 'auth',
    contextPath: '/apps/pocket',
  },
  {
    name: 'fin',
    contextPath: '/apps/1/pbTransactionAdapter',
  },
];

export default class App extends Component {
  state = {
    baseUri: 'http://10.50.51.60:8196/mobile-webconsole-react',
  }

  getDefaultMetadata = () => {
    return {
      datetime: '2018-01-17T13:08:22.883Z',
      deviceId: '2cd44d702cce2da5',
      devicePlatform: 'Android',
      deviceOSVersion: '5.1.1',
      deviceType: 'F1fw',
      latitude: -6.2552677,
      longitude: 106.6198383,
      appId: '1',
      appVersion: '2.0',
    }
  };


  render() {
    StatusBar.setBackgroundColor(ColorProperties.TOSCA, true);
    return (
      <AtiWebConsoleProvider
        services={services}
        baseUri={this.state.baseUri}
        tokenKey="x-auth-token"
        metadata={this.getDefaultMetadata()}
        defaultProtocol="https"
      >
          <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
              <navigator.AppWithNavigationState />
              <CentralizedPopup />
            </PersistGate>
          </Provider>
      </AtiWebConsoleProvider>
    );
  }
}
