/**
 * This screen will display a confirmation screen after doing the transaction.
 */

import React, { Component } from 'react';
import { ConvertJSONToArray } from 'ati-ui-elements';
import { getFormValues } from 'ati-redux-form';
import { connect } from 'react-redux';
import Confirmation from './../../modules/transaction/components/confirmation';
import navigate from './../../common/navigation/action';

class ConfirmationScreen extends Component {
    /**
     * Initialize the data that is going to change.
     * You should initialize state in the constructor, and then call setState when you want to change it.
     */
    state = {
        errorPIN: false,
        errorMessagePIN: '',
        pin: '',
        sourceData: [],
    }

     /**
     * This component is called when the component rendered and automatically will be run function getData.
     */
    componentDidMount() {
        this.getData();
    }

    /**
     * this function used for get data from form values on redux form.
     */
    getData = () => {
        // property that used for temporary saving the data, and convert data to array
        const tempArray = ConvertJSONToArray(this.props.formValues, [], {});
        // used for set value sourceData from tempArray
        this.setState({
            sourceData: tempArray,
        });
    }

    /**
     * this function used for validate input pin. You can customize the function depends on your need.
     * for now, the function only validate pin must be filled. Usually, the value of pin get from respond of data based on transactionId.
     */
    pinValidation = (value) => {
        this.setState({ pin: value });
        if (value.length === 0) {
            this.setState({ errorMessagePIN: ' PIN is Required', errorPIN: true });
            return false;
        }
        this.setState({ errorPIN: false });
        return true;
    }

    /**
     * this function only used for validate pin has filled. If the result of pinValidation true then automatically navigate to resultScreen.
     */
    validate = () => {
        if (this.pinValidation(this.state.pin)) {
            this.props.navigate('ResultScreen');
        }
    }

    render() {
        return (
            <Confirmation
                sourceData={this.state.sourceData}
                onChangeText={(value) => { this.pinValidation(value); }}
                onPress={() => { this.validate(); }}
                showError={this.state.errorPIN}
                errorMessage={this.state.errorMessagePIN}
            />
        );
    }
}

/**
 * this function used for get data from form values on redux form.
 * transactionType taken from formID of data and status usually get from respond of backend process.
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
 */
const mapActionToProp = () => ({
    navigate,
});

export default connect(mapStateToProps, mapActionToProp())(ConfirmationScreen);