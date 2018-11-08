import React, { Component } from 'react';
import { withWebConsole } from 'ati-web-console-connector';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AtiTextMask } from 'ati-ui-elements';
import walletIcon from './../../../../assets/img/wallet-idr.png';
import styles from './../../../../assets/styles/default.style';
import AccountCard from './../components/account-card';
import navigate from '../../../common/navigation/action';
import * as accountAction from '../store/account-action';

class AccountCardSwiper extends Component {
    state = {
        accountList: [],
    }

    /**
     * This component is called when the component rendered and automatically will be run function getData.
     */
    componentDidMount() {
        this.getData();
    }

    /**
     * This function to getData and setState to property accountList
     */
    getData = () => {
        // this.setState({ accountList: this.props.accountList });
        this.props.getListAccounts(this.props.webConsole);
    }


    /**
     * This function will be rendered the data of redux. And automatically displayed.
     */
    renderContent = item => (
        <View style={styles.viewRenderContent}>
            <Image source={walletIcon} style={styles.walletIconStyle} />
            <View style={styles.viewRenderContentText}>
                <AtiTextMask style={styles.textStyleAmount} type="credit-card">{item.item.accountNumber}</AtiTextMask>
                <AtiTextMask style={styles.textStyleAmount} type="money">{item.item.amount}</AtiTextMask>
            </View>
        </View>
    )

    render() {
        return <AccountCard renderContent={this.renderContent} accountList={this.props.accountList} reduxForm={this.props.reduxForm} keyValue={this.props.keyValue} fieldName={this.props.fieldName} />
    }
}
AccountCard.defaultProps = {
    fieldName: null,
    keyValue: 'accountNumber',
    reduxForm: false,
};

AccountCard.propTypes = {
    /**
     * field name for carousel with redux form
     */
    fieldName: PropTypes.string,
    /**
     * key of json data that will be used as value
     */
    keyValue: PropTypes.string,
    /**
     * define type will be used on redux form or not
     */
    reduxForm: PropTypes.bool,
};

/**
 * mapStateToProps function in react-redux maps states in Redux to props of a React components, which is basically changing props of a React component when Redux state is changed by an Redux action.
 * mapStateToProps pass state as a props to component using react-redux connect () function. Consider connect() function as wrapper component, which passes props to children.
 * The new component will subscribe to Redux store updates, this means that any time the store is updated, mapStateToProps will be called.
 */
const mapStateToProps = (state) => {
    const { account } = state;
    return {
        ...account,
    };
};

const mapActionToProp = () => ({
    navigate,
    ...accountAction,
});

export default connect(mapStateToProps, mapActionToProp())(withWebConsole(AccountCardSwiper));