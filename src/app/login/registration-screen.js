import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withWebConsole } from 'ati-web-console-connector';
import RegistrationComponent from './../../modules/authentication/components/registration-component';
import navigate from './../../common/navigation/action';
import * as action from './../../modules/popup/store/popup-action';
import * as authentication from './../../modules/authentication/store/authentication-action';

const required = value => (value ? undefined : 'Required');

class RegistrationScreen extends Component {
  onSubmit = (values) => {
    if ((values.username === 'admin' && values.password === '111111')) {
      this.props.navigate('HomeScreen');
    } else {
      this.props.showAlert('errorMessage.invalidPassword');
    }
  }

  render() {
    return (
          <RegistrationComponent
            formID="registration"
            onSubmit={this.onSubmit}
            fullnameValidation={required}
            roleValidation={required}
            passwordValidation={required}
            emailValidation={required}
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

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(RegistrationScreen));