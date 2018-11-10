import React, { Component } from 'react';
import {
    AtiButton,
    AtiText,
    AtiIcon,
    AtiTextInput,
    AtiCol,
} from 'ati-ui-elements';
import { AtiForm, AtiField } from 'ati-redux-form';
import { View, TouchableOpacity } from 'react-native';
import styles from './../../../../assets/styles/default.style';

class LoginForm extends Component {
    renderSubmit = handleSubmit => (
        <View>
            <AtiButton
                accessibilityLabel="button_login"
                buttonStyle={styles.buttonLoginStyle}
                events={{
                onPress: () => {
                    handleSubmit();
                },
            }}
            >
                <AtiText style={styles.textStyle}>Login</AtiText>
            </AtiButton>
            <View
                style={{
                marginTop: 10,
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
            }}
            >
                <AtiText
                    style={{
                    fontSize: 12,
                    textAlign: 'center',
                }}
                >Forgot your password ?
                </AtiText>
                <TouchableOpacity accessibilityLabel="button_close_filter" onPress={() => {}}>
                    <AtiText
                        style={{
                        fontSize: 12,
                        textAlign: 'center',
                    }}
                    >
                        Click Here
                    </AtiText>
                </TouchableOpacity>
            </View>

            <View
                style={{
                flexDirection: 'row',
                marginTop: 50,
                justifyContent: 'space-between',
            }}
            >
                <AtiText
                    style={{
                    marginLeft: 20,
                    fontSize: 12,
                    textAlign: 'left',
                    marginTop: 10,
                }}
                >
                    Don't have an account ?
                </AtiText>
                <AtiButton
                    buttonStyle={styles.registerButton}
                    events={{
                    onPress: () => {
                        handleSubmit();
                    },
                }}
                >
                    <AtiText style={styles.textStyle}>Register</AtiText>
                </AtiButton>
            </View>
        </View>
    );

    render() {
        const { 
formID, onSubmit, userNameValidation, passwordValidation 
} = this.props;
        return (
            <View style={styles.viewStyle}>
                <AtiForm
                    formId={formID}
                    onSubmit={values => onSubmit(values)}
                    submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
                >
                    <View>
                        <View style={styles.viewContainerStyle}>
                            <AtiCol size={2}>
                                <AtiIcon
                                    style={styles.iconUsernameStye}
                                    type="FontAwesome"
                                    name="user"
                                    color="black" 
                                />
                            </AtiCol>
                            <AtiCol size={5}>
                                <AtiField name="username" validate={userNameValidation}>
                                    <AtiTextInput
                                        textAlign="center"
                                        placeholder="Username"
                                        placeholderTextColor="black"
                                        textStyle={styles.textInputStyle} 
                                    />
                                </AtiField>
                            </AtiCol>
                            <AtiCol size={2}>
                                <View />
                            </AtiCol>
                        </View>
                        <View>
                            <View style={styles.viewContainerStyle}>
                                <AtiCol size={2}>
                                    <AtiIcon
                                        style={styles.iconUsernameStye}
                                        type="FontAwesome"
                                        name="lock"
                                        color="black" 
                                    />
                                </AtiCol>
                                <AtiCol size={5}>
                                    <AtiField name="password" validate={passwordValidation}>
                                        <AtiTextInput
                                            textAlign="center"
                                            placeholder="Password"
                                            placeholderTextColor="black"
                                            textStyle={styles.textInputStyle}
                                            secureTextEntry 
                                        />
                                    </AtiField>
                                </AtiCol>
                                <AtiCol size={2}>
                                    <AtiIcon
                                        style={styles.iconEyeStyle}
                                        type="FontAwesome"
                                        name="eye-slash"
                                        color="black" 
                                    />
                                </AtiCol>
                            </View>
                        </View>
                    </View>
                </AtiForm>
            </View>
        );
    }
}

export default LoginForm;