/**
 * This file will display an example screen of transaction form. You can modify it depends on your need.
 */
 
import React, { Component } from 'react';
import { AtiButton, AtiTextInput, AtiCard, AtiTextInputAmount, AtiText } from 'ati-ui-elements';
import { AtiForm, AtiField } from 'ati-redux-form';
import { View, Container } from 'native-base';
import AccountCardSwiper from './../../account/container/account-card-swiper';
import styles from './../../../../assets/styles/default.style';
import PropTypes from 'prop-types';

class TransactionForm extends Component {
    static propTypes={
        formID: PropTypes.string.isRequired,
    }

    /**
     * this function will be running when you rendered component that as trigered to do submit on redux form, then will return button submit.
     * handleSubmit is a call back function to define form valid status
     */
    renderSubmit = handleSubmit => (
        <AtiButton
            style={styles.buttonLoginStyle}
            textStyle={styles.textStyle}
            events={{
                onPress: () => {
                    handleSubmit();
                },
            }}
        >
            Submit
        </AtiButton>
    );

    render() {
        const {
            formID,
            onSubmit,
            destinationAccountValidation,
            amountValidation,
            noteValidation,
        } = this.props;
        return (
            <Container style={styles.containerBackground}>
            <View>
                <AtiForm
                    formId={formID}
                    destroyOnUnmount={false}
                    forceUnregisterOnUnmount
                    keepDirtyOnReinitialize
                    // onSubmit is a Function that will be called when submit form.
                    onSubmit={values => onSubmit()}
                    // Rendered component that as trigered to do submit.
                    submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
                >
                    <View>
                        <AtiCard>
                            <AccountCardSwiper reduxForm fieldName="accountFrom" />
                        </AtiCard>
                        <View>
                            <AtiText style={styles.textTransfer}>Destination Account<AtiText style={styles.mandatoryStyle}> *</AtiText></AtiText>
                            <AtiField name="destinationAccount" validate={destinationAccountValidation} >
                                <AtiTextInput placeholder="Destination Account" keyboardType="numeric" textStyle={styles.inputValueStyle} />
                            </AtiField>

                            <AtiText style={styles.textTransfer}>Amount<AtiText style={styles.mandatoryStyle}> *</AtiText></AtiText>
                            <AtiField name="amount" validate={amountValidation} >
                                <AtiTextInputAmount placeholder="Amount" keyboardType="numeric" textStyle={styles.inputValueStyle} />
                            </AtiField>

                            <AtiText style={styles.textTransfer}>Note</AtiText>
                            <AtiField name="note" validate={noteValidation} >
                                <AtiTextInput placeholder="Note" textStyle={styles.inputValueStyle} />
                            </AtiField>
                        </View>
                    </View>
                </AtiForm>
            </View>
            </Container>
        );
    }
}

export default TransactionForm;