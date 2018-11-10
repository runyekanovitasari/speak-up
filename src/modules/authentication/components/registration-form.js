import React, { Component } from 'react';
import { AtiButton, AtiText, AtiPicker, AtiTextInput } from 'ati-ui-elements';
import { AtiForm, AtiField } from 'ati-redux-form';
import { Content, View } from 'react-native';
import styles from './../../../../assets/styles/default.style';

class RegistrationForm extends Component {
    renderSubmit = handleSubmit => (
        <View>
            <AtiButton
                buttonStyle={styles.buttonLoginStyle}
                events={{
                onPress: () => {
                    handleSubmit();
                },
            }}
            >
                <AtiText style={styles.textStyle}>Register</AtiText>
            </AtiButton>
        </View>
    );

    render() {
        const {
            formID,
            onSubmit,
            fullnameValidation,
            roleValidation,
            passwordValidation,
            emailValidation,
        } = this.props;
        return (
            <Content style={styles.viewStyle}>
                <AtiForm
                    formId={formID}
                    onSubmit={values => onSubmit(values)}
                    submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
                >
                    <View>
                        <View style={{
                            flex: 1,
                                    backgroundColor: '#EAE8EE',
                                    alignItem: 'center',
                            }}
                        >
                            <AtiField name="role" validate={roleValidation} type="select">
                                <AtiPicker
                                    pickerStyle={styles.contentStyle}
                                    optionLabelDefault="Choose Your Role"
                                    optionLabel="label"
                                    optionValue="value"
                                    source={[
                                    {
                                        id: 1,
                                        value: 'Speaker',
                                        label: 'Speaker',
                                    }, {
                                        id: 2,
                                        value: 'Organizer',
                                        label: 'Organizer',
                                    },
                                ]}
                                />
                            </AtiField>
                        </View>
                        {/* <View style={styles.viewContainerStyle}>
                            <AtiField name="fullname" validate={fullnameValidation}>
                                <AtiTextInput
                                    textAlign="center"
                                    placeholder="Fullname"
                                    placeholderTextColor="black"
                                    textStyle={styles.textInputStyle}
                                />
                            </AtiField>
                        </View>
                        <View style={styles.viewContainerStyle}>
                            <AtiField name="Email" validate={emailValidation}>
                                <AtiTextInput
                                    textAlign="center"
                                    placeholder="Email"
                                    placeholderTextColor="black"
                                    textStyle={styles.textInputStyle}
                                />
                            </AtiField>
                        </View>
                        <View style={styles.viewContainerStyle}>
                            <AtiField name="Password" validate={passwordValidation}>
                                <AtiTextInput
                                    textAlign="center"
                                    placeholder="Password"
                                    placeholderTextColor="black"
                                    textStyle={styles.textInputStyle}
                                />
                            </AtiField>
                        </View> */}
                    </View>
                </AtiForm>
            </Content>
        );
    }
}

export default RegistrationForm;