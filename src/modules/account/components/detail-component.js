/**
 * This screen will display the detail of your account.
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Body } from 'native-base';
import { AtiText, AtiCard, AtiCardItem, AtiTextMask, AtiList, AtiListItem } from 'ati-ui-elements';
import styles from '../../../../assets/styles/default.style';

class DetailComponent extends Component {
    render() {
        /*
            item will return data from redux store.
        */
        const { item } = this.props.data;
        return (
            <Container style={styles.containerBackground}>
                <AtiCard>
                    <AtiCardItem>
                        <AtiList>
                            <AtiListItem>
                                <View style={styles.viewDetailAccountStyle}>
                                    <AtiText style={styles.labelList}>Account Number</AtiText>
                                    <Body>
                                        <View style={styles.viewTextDetailAccount}>
                                            <AtiTextMask style={styles.valueList} type="credit-card">{item.accountNumber}</AtiTextMask>
                                        </View>
                                    </Body>
                                </View>
                            </AtiListItem>
                            <AtiListItem>
                                <View style={styles.viewDetailAccountStyle}>
                                    <AtiText style={styles.labelList}>Balance Account</AtiText>
                                    <Body>
                                        <View style={styles.viewTextDetailAccount}>
                                            <AtiTextMask style={styles.valueList} type="money">{item.amount}</AtiTextMask>
                                        </View>
                                    </Body>
                                </View>
                            </AtiListItem>
                            <AtiListItem>
                                <View style={styles.viewDetailAccountStyle}>
                                    <AtiText style={styles.labelList}>Product Name</AtiText>
                                    <Body>
                                        <View style={styles.viewTextDetailAccount}>
                                            <AtiText style={styles.valueList}>{item.productName}</AtiText>
                                        </View>
                                    </Body>
                                </View>
                            </AtiListItem>
                            <AtiListItem>
                                <View style={styles.viewDetailAccountStyle}>
                                    <AtiText style={styles.labelList}>Status</AtiText>
                                    <Body>
                                        <View style={styles.viewTextDetailAccount}>
                                            <AtiText style={styles.valueList}>{item.accountStatus}</AtiText>
                                        </View>
                                    </Body>
                                </View>
                            </AtiListItem>
                        </AtiList>
                    </AtiCardItem>
                </AtiCard>
            </Container>
        );
    }
}

export default DetailComponent;