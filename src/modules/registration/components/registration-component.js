/**
 * This file will call component RegistrationSteps.
 */
import React, { Component } from 'react';
import { AtiMultiStep } from 'ati-ui-elements';
import RegistrationComponentSteps from './registration-component-steps';

class RegistrationComponent extends Component {
    render() {
        const {
            currentIndex,
            formID,
            onNext,
            onPrevious,
            onSubmit,
            agreementValidation,
            nameValidation,
            dateOfBirthValidation,
            salutationValidation,
            passwordValidation,
            confirmPasswordValidation,
        } = this.props;

        const registrationParams = {
            formID,
            onNext,
            onPrevious,
            onSubmit,
            agreementValidation,
            nameValidation,
            dateOfBirthValidation,
            salutationValidation,
            passwordValidation,
            confirmPasswordValidation,
        };
        return (
            <AtiMultiStep
                currentPosition={currentIndex}
                // Component RegistrationComponent will combined with the parameter from the screen. And will be called in RegistrationScreen
                dataView={RegistrationComponentSteps(registrationParams)}
                stepIndicatorSize={25}
                currentStepIndicatorSize={30}
                separatorStrokeWidth={2}
                currentStepStrokeWidth={3}
                stepStrokeCurrentColor="#ffaf50"
                stepStrokeWidth={2}
                stepStrokeFinishedColor="#0071bc"
                stepStrokeUnFinishedColor="#aaaaaa"
                separatorUnFinishedColor="#0071bc"
                stepIndicatorFinishedColor="#84d2d8"
                stepIndicatorUnFinishedColor="#e6e6e6"
                stepIndicatorCurrentColor="#ffbb61"
                stepIndicatorLabelFontSize={15}
                currentStepIndicatorLabelFontSize={16}
                stepIndicatorLabelCurrentColor="#ffffff"
                stepIndicatorLabelFinishedColor="#ffffff"
                stepIndicatorLabelUnFinishedColor="#999999"
                labelColor="#9DA29B"
                labelSize={13}
                currentStepLabelColor="#fe7013"
                showLabel={false}
            />
        );
    }
}

export default RegistrationComponent;