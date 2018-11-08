/**
 * This component will display login box of login screen, such as components username, password, button.
 */

import React, { Component } from 'react';
import { AtiButton, AtiText, AtiIcon, AtiTextInput, AtiCol, AtiTextInputPassword } from 'ati-ui-elements';
import { AtiForm, AtiField } from 'ati-redux-form';
import { View, TouchableOpacity } from 'react-native';
import styles from './../../../../assets/styles/default.style';

class LoginForm extends Component {
     /**
     * this function will be running when you rendered component that as trigered to do submit on redux form, then will return button submit.
     * handleSubmit is a call back function to display button login
     */
    renderSubmit = handleSubmit => (
        <AtiButton
            accessibilityLabel="button_login"
            buttonStyle={styles.buttonLoginStyle}
            events={{
                onPress: () => {
                    handleSubmit();
                },
            }}
        >
            <AtiText style={styles.textStyle}>LOGIN</AtiText>
        </AtiButton>
    );


    render() {
        const {
            formID,
            onSubmit,
            userNameValidation,
            passwordValidation,
        } = this.props;
        return (
            <View style={styles.viewStyle}>
                <AtiForm
                    formId={formID}
                    // onSubmit is a Function that will be called when submit form.
                    onSubmit={values => onSubmit(values)}
                     // Rendered component that as trigered to do submit.
                    submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
                >
                    <View>
                        <View
                            style={styles.viewContainerStyle}
                        >
                            <AtiCol size={2} >
                                <AtiIcon
                                    style={styles.iconUsernameStye}
                                    type="FontAwesome"
                                    name="user"
                                    color="white"
                                />
                            </AtiCol>
                            <AtiCol size={5}>
                                <AtiField name="username" validate={userNameValidation} >
                                    <AtiTextInput
                                        textAlign="center"
                                        placeholder="Username"
                                        placeholderTextColor="white"
                                        textStyle={styles.textInputStyle}
                                    />
                                </AtiField>
                            </AtiCol>
                            <AtiCol size={2}>
                                <View />
                            </AtiCol>
                        </View>
                        <View>
                            <AtiField name="password" validate={passwordValidation} >
                                <AtiTextInputPassword
                                    style={styles.textInputPassword}
                                    maxLength={6}
                                    placeholder="Password"
                                    placeholderTextColor="white"
                                />
                            </AtiField>
                        </View>
                    </View>
                </AtiForm>
            </View>
        );
    }
}

export default LoginForm;