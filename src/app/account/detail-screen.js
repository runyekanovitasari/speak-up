/*
 * This component will display detail of account.In this screen also will displayed 2 tabs about account information and the others tab will display transaction history of accounts.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, TabHeading } from 'native-base';
import { AtiText, AtiTabs, AtiTab, AtiIcon } from 'ati-ui-elements';
import { ScrollView } from 'react-native';
import styles from '../../../assets/styles/default.style';
import DetailComponent from '../../modules/account/components/detail-component';
import HistoryComponent from '../../modules/account/components/history-component';

class DetailScreen extends Component {
    render() {
        return (
            <Container style={styles.containerBackground}>
                <ScrollView>
                    <AtiTabs initialPage={0}>
                        <AtiTab
                            heading={
                                <TabHeading style={styles.tab}>
                                    <AtiIcon name="person" style={styles.iconTab} />
                                    <AtiText style={styles.textTab}>Account Information</AtiText>
                                </TabHeading>}
                        >
                            <DetailComponent data={this.props.data} />
                        </AtiTab>
                        <AtiTab
                            heading={
                                <TabHeading style={styles.tab}>
                                    <AtiIcon name="clock" style={styles.iconTab} />
                                    <AtiText style={styles.textTab}>Transaction History</AtiText>
                                </TabHeading>}
                        >
                            <HistoryComponent dataArray={this.props.data.accountHistoryList} />
                        </AtiTab>
                    </AtiTabs>
                </ScrollView>
            </Container>
        );
    }
}

/**
 * mapStateToProps function in react-redux maps states in Redux to props of a React components, which is basically changing props of a React component when Redux state is changed by an Redux action.
 * mapStateToProps pass state as a props to component using react-redux connect () function. Consider connect() function as wrapper component, which passes props to children.
 * The new component will subscribe to Redux store updates, this means that any time the store is updated, mapStateToProps will be called.
 * @param {*} state
 */

const mapStateToProps = (state) => {
    const { account } = state;
    return {
        data: account,
    };
};

/**
 * connect  : A higher-order function from react-redux that can wrap one of our components. connect takes up to two arguments, usually named mapStateToProps and mapActionToProp. We use these functions to tell Redux which pieces of state to pass to our component as props, and also to give us a convenient reference to the store’s dispatch method.
 */

export default connect(mapStateToProps)(DetailScreen);