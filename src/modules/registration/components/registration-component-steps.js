/**
 * TODO :
 * This file will be wrap all component step of registration.
 * First thing you must do, you must be import and define the component of registration step,
 * Then, You can call the component registration step with JSON format (see the example below).
 * The sequence of formats affects the order of step that will display.
 * Don't forget to export the component, in case another screen needed it.
 */

import React from 'react';
import RegistrationComponentStep1 from './registration-component-step1';
import RegistrationComponentStep2 from './registration-component-step2';
import RegistrationComponentStep3 from './registration-component-step3';

/**
 * Initialize the format json of component to display registration step
 */

const RegistrationComponentStep = props => ([{
    label: 'Register',
    component:
        <RegistrationComponentStep1
            formID={props.formID}
            onNext={props.onNext}
            agreementValidation={props.agreementValidation}
        />,
},
{
    label: 'Activation',
    component:
        <RegistrationComponentStep2
            formID={props.formID}
            onNext={props.onNext}
            onPrevious={props.onPrevious}
            nameValidation={props.nameValidation}
            dateOfBirthValidation={props.dateOfBirthValidation}
            salutationValidation={props.salutationValidation}
        />,
},
{
    label: 'Input Profile',
    component:
        <RegistrationComponentStep3
            formID={props.formID}
            onSubmit={props.onSubmit}
            onPrevious={props.onPrevious}
            passwordValidation={props.passwordValidation}
            confirmPasswordValidation={props.confirmPasswordValidation}
        />,
},
]);

/**
 * export component, in case another screen needed it.
 */

export default RegistrationComponentStep;