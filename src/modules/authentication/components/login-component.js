/**
 * This component just handle style/display of login screen and receive value of property from LoginForm
 * tag <LoginLogo/> will call screen that contain a logo
 * tag <LoginForm {...loginboxParam} /> will call screen that contains field box of login also automatically set the value of parameter loginboxParam
 */

import { View } from 'react-native';
import React, { Component } from 'react';
import LoginLogo from './../components/login-logo';
import LoginForm from './../components/login-form';
import styles from './../../../../assets/styles/default.style';

class LoginComponent extends Component {
  render() {
      const {
        formID,
        secureTextEntry,
        onSubmit,
        onEyeIconPress,
        userNameValidation,
        passwordValidation,
      } = this.props;

    const loginboxParam = {
        formID,
        secureTextEntry,
        onEyeIconPress,
        onSubmit,
        userNameValidation,
        passwordValidation,
      };
    return (
      <View style={styles.containerLoginStyle}>
        <LoginLogo />
        <LoginForm {...loginboxParam} />
      </View>
    );
  }
}

export default LoginComponent;