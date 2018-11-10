import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withWebConsole } from 'ati-web-console-connector';
import LoginComponent from './../../modules/authentication/components/login-component';
import navigate from './../../common/navigation/action';
import * as action from './../../modules/popup/store/popup-action';
import * as authentication from './../../modules/authentication/store/authentication-action';

const required = value => (value ? undefined : 'Required');

class LoginScreen extends Component {
  state = {
    secureTextEntry: true,
  }

  onEyeIconPress = () => {
    this.setState({ secureTextEntry: !this.state.secureTextEntry });
  }

  onSubmit = (values) => {
    if ((values.username === 'admin' && values.password === '111111')) {
      this.props.navigate('HomeScreen');
    } else {
      this.props.showAlert('errorMessage.invalidPassword');
    }
  }

  render() {
    return (
          <LoginComponent
            formID="login"
            onSubmit={this.onSubmit}
            userNameValidation={required}
            passwordValidation={required}
          />
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapActionToProps = () => ({
  navigate,
  ...action,
  ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(LoginScreen));