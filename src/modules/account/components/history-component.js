/**
 * This screen will display transaction history of your account.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Left, Right } from 'native-base';
import { AtiText, AtiCard, AtiCardItem, AtiTextMask, AtiList, AtiListItem } from 'ati-ui-elements';
import { View } from 'react-native';
import styles from '../../../../assets/styles/default.style';


class HistoryComponent extends Component {
    render() {
        return (
                <Container style={styles.containerBackground}>
                    <AtiCard>
                        <AtiCardItem header>
                            <AtiText style={styles.valueList}>Transaction & Amount</AtiText>
                        </AtiCardItem>
                        <AtiList
                            dataArray={this.props.dataArray}
                            renderRow={
                                item =>
                                    (<AtiListItem>
                                        <Left>
                                            <View>
                                                <AtiText style={styles.labelList}>{item.transaction}</AtiText>
                                            </View>
                                        </Left>
                                        <Right>
                                            <View>
                                                <AtiTextMask style={styles.historyList} type="money">{item.amount}</AtiTextMask>
                                            </View>
                                        </Right>
                                     </AtiListItem>)
                                    }
                        />
                    </AtiCard>
                </Container>
        );
    }
}
export default HistoryComponent;