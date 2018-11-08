/**
 * This file will display form on steps 1 of registration that filled with aggrement.
 * You must be checked the checkbox and click Next button if you want through this step, then the display will automatically redirect to the next step.
 */
import React, { Component } from 'react';
import { Content, View } from 'native-base';
import {
    AtiButton,
    AtiCheckBox,
    AtiRow,
    AtiCol,
    AtiH3,
    AtiText,
} from 'ati-ui-elements';
import { AtiForm, AtiField } from 'ati-redux-form';
import styles from './../../../../assets/styles/default.style';

class RegistrationComponentStep1 extends Component {
    /**
     * This function will be running when you rendered component that as trigered to do submit on redux form, then will return button submit.
     * handleSubmit is a callback function to display button login
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
            <AtiText style={styles.textStyle}>NEXT</AtiText>
        </AtiButton>
    );

    render() {
        const { agreementValidation, formID, onNext } = this.props;
        return (
            <Content style={styles.rowStyle1}>
                <AtiForm
                    formId={formID}
                    destroyOnUnmount={false}
                    forceUnregisterOnUnmount
                    keepDirtyOnReinitialize
                    // onSubmit is a Function that will be called when submit form.
                    onSubmit={values => onNext(values)}
                    // Rendered component that as trigered to do submit.
                    submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
                >
                    <View>
                        <AtiRow>
                            <AtiCol><AtiH3 style={styles.titlePresetStyle}>Term and condition</AtiH3></AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </AtiText>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiField name="agreement" validate={agreementValidation} type="checkbox">
                                <AtiCheckBox
                                    color="blue"
                                    label="I Agree with PocketBank's Wallet Term and Condition"
                                    checkBoxStyle={styles.checboxStyle}
                                    viewStyle={styles.continerCheckboxStyle}
                                    labelStyle={styles.labelCheckboxStyle}
                                />
                            </AtiField>
                        </AtiRow>
                    </View>
                </AtiForm>
            </Content>
        );
    }
}

export default RegistrationComponentStep1;