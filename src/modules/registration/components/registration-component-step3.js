/**
 * This file will display form on the last steps of registration that filled with field password and confirm password.
 * If you want submit all the data of registration, First, you must be fill the password field and confirm password field.
 * After that you can submit or go back to previous step if you want to edit the previous data.
 */
 
import React, { Component } from 'react';
import { Content, View } from 'native-base';
import {
    AtiButton,
    AtiRow,
    AtiCol,
    AtiH3,
    AtiText,
    AtiTextInput,
} from 'ati-ui-elements';
import { AtiForm, AtiField } from 'ati-redux-form';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import styles from './../../../../assets/styles/default.style';

class RegistrationComponentStep3 extends Component {
    /**
     * This function will be running when you rendered component that as trigered to do submit on redux form, then will return button submit.
     * handleSubmit is a call back function to display button login
     */
    renderSubmit = handleSubmit => (
        <AtiRow>
            <AtiCol>
                <AtiButton
                    accessibilityLabel="button_previous"
                    buttonStyle={styles.buttonLoginStyle}
                    events={{
                        onPress: this.props.onPrevious,
                    }}
                >
                    <AtiText style={styles.textStyle}>Previous</AtiText>
                </AtiButton>
            </AtiCol>
            <AtiCol>
                <AtiButton
                    accessibilityLabel="button_submit"
                    buttonStyle={styles.buttonLoginStyle}
                    events={{
                        onPress: () => {
                            handleSubmit();
                        },
                    }}
                >
                    <AtiText style={styles.textStyle}>Submit</AtiText>
                </AtiButton>
            </AtiCol>
        </AtiRow>
    );

    render() {
        const {
            formID,
            onSubmit,
            passwordValidation,
            confirmPasswordValidation,
        } = this.props;
        return (
            <Content style={styles.rowStyle1}>
                <AtiForm
                    formId={formID}
                    destroyOnUnmount={false}
                    forceUnregisterOnUnmount
                    keepDirtyOnReinitialize
                    // onSubmit is a Function that will be called when submit form.
                    onSubmit={values => onSubmit(values)}
                    // Rendered component that as trigered to do submit.
                    submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
                >
                    <View>
                        <AtiRow>
                            <AtiCol><AtiH3 style={styles.titlePresetStyle}>Make your account save</AtiH3></AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={styles.firstContentStyle} locKey="label.password" /><AtiText style={styles.mandatoryStyle}>*</AtiText>
                                </View>
                                <AtiField name="password" validate={passwordValidation} >
                                    <AtiTextInput
                                        secureTextEntry
                                        textStyle={styles.textInputTrxStyle}
                                    />
                                </AtiField>
                            </AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={styles.firstContentStyle} locKey="label.confirmPassword" /><AtiText style={styles.mandatoryStyle}>*</AtiText>
                                </View>
                                <AtiField name="confirmPassword" validate={confirmPasswordValidation} >
                                    <AtiTextInput
                                        secureTextEntry
                                        textStyle={styles.textInputTrxStyle}
                                    />
                                </AtiField>
                            </AtiCol>
                        </AtiRow>


                    </View>
                </AtiForm>
            </Content>
        );
    }
}

export default RegistrationComponentStep3;