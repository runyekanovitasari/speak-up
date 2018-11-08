/**
 * This screen will display the result of your transaction in the form of a receipt.
 */

import React, { Component } from 'react';
import { AtiTransactionResult } from 'ati-ui-elements';
import { getFormValues, destroy } from 'ati-redux-form';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import navigate from './../../common/navigation/action';
import styles from './../../../assets/styles/default.style';

class ResultScreen extends Component {
    /**
     * Initialize the data that is going to change.
     * You should initialize state in the constructor, and then call setState when you want to change it.
     */
    state = {
        data: [],
    }

    /**
     * This method is only called one time, which is before the initial render.Since this method is called before render() our Component will not have access to the Native UI (DOM, etc.). We also will not have access to the children refs, because they are not created yet.
     * this function for calling method getData() 
     */
    componentWillMount() {
        this.getData();
    }

    /**
     * this function used for get data from form values on redux form.
     * transactionType taken from formID of data and status usually get from respond of backend process.
     */
    getData = () => {
        const template = { transactionType: this.props.formID, status: 'Success' };
        const temp = { ...template, ...this.props.formValues };
        this.setState({
            data: temp,
        });
    }

    render() {
        return (
            <Container style={styles.containerBackground}>
                <AtiTransactionResult
                    showBackgroundImage={false}
                    sourceData={this.state.data}
                />
            </Container>
        );
    }
}

/**
 * mapStateToProps function in react-redux maps states in Redux to props of a React components, which is basically changing props of a React component when Redux state is changed by an Redux action.
 * mapStateToProps pass state as a props to component using react-redux connect () function. Consider connect() function as wrapper component, which passes props to children.
 * The new component will subscribe to Redux store updates, this means that any time the store is updated, mapStateToProps will be called.
 * formValues used for getData from redux form based on formID on redux transaction
 */
const mapStateToProps = (state) => {
    const { transaction } = state;
    return {
        ...transaction,
        formValues: getFormValues(state.transaction.formID)(state),
    };
};

/**
 * navigate : Function to link to another screen in your app. The navigate action will update the current state with the result of a navigate action.
 * destroy is a function that used for destroys the form state in the Redux store. By default, this will be called for you in componentWillUnmount().
 * Usage of destroy() -> this.props.destroy.formName(formId)
 */
const mapActionToProp = () => ({
    navigate,
    destroy,
});

export default connect(mapStateToProps, mapActionToProp())(ResultScreen);