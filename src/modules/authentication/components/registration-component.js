
import { View } from 'react-native';
import React, { Component } from 'react';
import LoginLogo from './../components/login-logo';
import RegistrationForm from './../components/registration-form';
import styles from './../../../../assets/styles/default.style';

class RegistrationComponent extends Component {
  render() {
      const {
        formID,
        secureTextEntry,
        onSubmit,
        onEyeIconPress,
        userNameValidation,
        passwordValidation,
      } = this.props;

    const registrationBoxParam = {
        formID,
        secureTextEntry,
        onEyeIconPress,
        onSubmit,
        userNameValidation,
        passwordValidation,
      };
    return (
      <View>
        <LoginLogo />
        <RegistrationForm {...registrationBoxParam} />
      </View>
    );
  }
}

export default RegistrationComponent;