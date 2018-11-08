/**
 * This file will display an example screen of transaction authentication. You can modify it depends on your need.
 */

import React, { Component } from 'react';
import { AtiButton, AtiTextInput, AtiText, AtiErrorMessage } from 'ati-ui-elements';
import { View } from 'native-base';
import styles from './../../../../assets/styles/default.style';

class TransactionAuthentication extends Component {
    render() {
        const {
            onChangeText,
            onPress,
            showError,
            errorMessage,
        } = this.props;
        return (
            <View>
                <AtiText style={styles.textTransfer}>
                    PIN
                    <AtiText style={styles.mandatoryStyle}> *</AtiText>
                </AtiText>
                <AtiTextInput
                    placeholder="PIN"
                    secureTextEntry
                    events={{ onChangeText }}
                    textStyle={styles.inputValueStyle}
                />
                <AtiErrorMessage showError={showError}>
                    {errorMessage}
                </AtiErrorMessage>
                <AtiButton
                    style={styles.buttonLoginStyle}
                    textStyle={styles.textStyle}
                    events={{ onPress }}
                >
                    Submit
                </AtiButton>
            </View>
        );
    }
}

export default TransactionAuthentication;