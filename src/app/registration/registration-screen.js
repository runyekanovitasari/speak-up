/**
 * This component will display form to registration. In this screen will be called component <RegistrationComponent/> to display the form.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistrationComponent from './../../modules/registration/components/registration-component';
import * as action from './../../modules/registration/store/registration-action';

/* TODO
 * This function used for required field. If you called this function the field automatically must be filled
 */
const required = value => (value ? undefined : 'Required');

class RegistrationScreen extends Component {
    /*
     **TODO
     * This function used for update value of currentIndex to go next step.
     * You can also modified this logic depend on your need.
     */
    onNext = () => {
        this.props.updateCurrentIndex(this.props.currentIndex);
    }
    /*
     **TODO
     * This function used for update value of currentIndex to go previous step.
     * You can also modified this logic depend on your need.
     */
    onPrevious = () => {
        this.props.updateCurrentIndex(this.props.currentIndex, false);
    }
    /*
     **TODO
     * This function used for submit your value of data.
     * You can also modified this logic depend on your need.
     */
    onSubmit = (values) => {
        console.log(values);
    }


    /* property that used for component <RegistrationComponent/>. such as :
    * - currentIndex : property to indicate position of form registration.
    * - formID : mandatory property that you must set when you use redux form.
    * - onNext : function that used for update value of currentIndex to go next step
    * - onPrevious : function that used for update value of currentIndex to go previous step
    * - onSubmit : function that used for submit the values of data. You can modified this function depends on your need.
    * - agreementValidation : mandatory property, you must be filled if you want to go to next step.
    * - nameValidation : mandatory property, you must be filled if you want to go to next step.
    * - dateOfBirthValidation : mandatory property, you must be filled if you want to go to next step.
    * - salutationValidation : mandatory property, you must be filled if you want to go to next step.
    * - passwordValidation : mandatory property, you must be filled if you want to go to next step.
    * - confirmPasswordValidation : mandatory property, you must be filled if you want to go to next step.
    */
    render() {
        return (
            <RegistrationComponent
                currentIndex={this.props.currentIndex}
                formID="registrationForm"
                // Will call function onNext on above
                onNext={this.onNext}
                // Will call function onPrevious on above
                onPrevious={this.onPrevious}
                // Will call function onSubmit on above
                onSubmit={this.onSubmit}
                // Will call function required on above
                agreementValidation={required}
                 // Will call function required on above
                nameValidation={required}
                 // Will call function required on above
                dateOfBirthValidation={required}
                 // Will call function required on above
                salutationValidation={required}
                 // Will call function required on above
                passwordValidation={required}
                 // Will call function required on above
                confirmPasswordValidation={required}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { registration } = state;
    return {
        ...registration,
    };
};

const mapActionToProp = () => ({
    ...action,
});

export default connect(mapStateToProps, mapActionToProp())(RegistrationScreen);