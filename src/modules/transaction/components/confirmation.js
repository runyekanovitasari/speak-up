/**
 * This component will wrap component Confirmation Card and Transaction Authentication then will be exported become 1 component.
 */

import React, { Component } from 'react';
import { View, Container } from 'native-base';
import ConfirmationCard from './confirmation-card';
import TransactionAuthentication from './transaction-authentication';
import styles from './../../../../assets/styles/default.style';

class Confirmation extends Component {
    render() {
        const {
            sourceData,
            onChangeText,
            onPress,
            showError,
            errorMessage,
        } = this.props;
        const transactionAuthenticationParam = {
            onChangeText,
            onPress,
            showError,
            errorMessage,
        };
        return (
            <Container style={styles.containerBackground}>
                <View>
                    <ConfirmationCard sourceData={sourceData} />
                    <TransactionAuthentication {...transactionAuthenticationParam} />
                </View>
            </Container>
        );
    }
}

export default Confirmation;