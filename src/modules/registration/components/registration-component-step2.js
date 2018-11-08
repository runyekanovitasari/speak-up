/**
 * This file will display form on steps 2 of registration that filled with profile data.
 * You must be filled all mandatory field and click Next button if you want to through this step.
 * Or you can clicked previous button, if you want go back to previous step of registration on step 1. 
 */
import React, { Component } from 'react';
import { Content, View } from 'native-base';
import {
    AtiButton,
    AtiDatePicker,
    AtiRow,
    AtiCol,
    AtiH3,
    AtiText,
    AtiTextInput,
    AtiPicker,
} from 'ati-ui-elements';
import { AtiForm, AtiField } from 'ati-redux-form';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import styles from './../../../../assets/styles/default.style';

class RegistrationComponentStep2 extends Component {
    /**
     * This function will be running when you rendered component that as trigered to do submit on redux form, then will return button submit.
     * handleSubmit is a callback function to display button login
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
                    accessibilityLabel="button_next"
                    buttonStyle={styles.buttonLoginStyle}
                    events={{
                        onPress: () => {
                            handleSubmit();
                        },
                    }}
                >
                    <AtiText style={styles.textStyle}>Next</AtiText>
                </AtiButton>
            </AtiCol>
        </AtiRow>
    );

    render() {
        const {
            nameValidation,
            dateOfBirthValidation,
            salutationValidation,
            formID,
            onNext,
        } = this.props;
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
                            <AtiCol><AtiH3 style={styles.titlePresetStyle}>Complete your profile data</AtiH3></AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={styles.firstContentStyle} locKey="label.name" /><AtiText style={styles.mandatoryStyle}>*</AtiText>
                                </View>
                                <AtiField name="name" validate={nameValidation} >
                                    <AtiTextInput
                                        textStyle={styles.textInputTrxStyle}
                                    />
                                </AtiField>
                            </AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={styles.firstContentStyle} locKey="label.dateOfBirth" /><AtiText style={styles.mandatoryStyle}>*</AtiText>
                                </View>
                                <AtiField name="dateOfBirth" validate={dateOfBirthValidation} type="date">
                                    <AtiDatePicker
                                        placeholder="Please Input Here"
                                        showIcon
                                    />
                                </AtiField>
                            </AtiCol>
                        </AtiRow>

                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={styles.firstContentStyle} locKey="label.salutation" /><AtiText style={styles.mandatoryStyle}>*</AtiText>
                                </View>
                                <AtiField name="salutation" validate={salutationValidation} type="select">
                                    <AtiPicker
                                        pickerStyle={styles.contentStyle}
                                        optionLabelDefault={I18n.t('label.selectDefault')}
                                        optionLabel="label"
                                        optionValue="value"
                                        source={[
                                            {
                                                id: 1,
                                                value: 'Mr',
                                                label: 'Mr',
                                            }, {
                                                id: 2,
                                                value: 'Mrs',
                                                label: 'Mrs',
                                            }, {
                                                id: 3,
                                                value: 'Miss',
                                                label: 'Miss',
                                            },
                                        ]}
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

export default RegistrationComponentStep2;