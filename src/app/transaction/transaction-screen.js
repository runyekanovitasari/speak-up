import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AtiNavigationAction } from 'ati-navigation';
import { destroy } from 'ati-redux-form';
import navigate from './../../common/navigation/action';
import * as action from './../../modules/transaction/store/transaction-action';
import TransactionFormComponent from '../../modules/transaction/components/transaction-form-component';


const required = value => (value ? undefined : 'Required');

class TransactionScreen extends Component {
   /**
    * Initialize the data that is going to change.
    * You should initialize state in the constructor, and then call setState when you want to change it.
    */
   state = {
       formID: 'transactionForm',
   }

   /**
    * This component is called when the component rendered and automatically will update formID
    */
   componentDidMount() {
       this.props.updateFormID(this.state.formID);
       
       /**
        * This action will be executed when you press Back Navigation in the ResultScreen
        */
       this.props.setBackNavigationEvents('ResultScreen', () => { this.props.destroy(this.state.formID); this.props.navigate('TransferScreen'); });
   }

   onSubmit = () => {
       this.props.navigate('ConfirmationScreen');
   }

   render() {
       return (
           <TransactionFormComponent
               formID={this.state.formID}
               onSubmit={this.onSubmit}
               destinationAccountValidation={required}
               amountValidation={required}
           />
       );
   }
}

/**
* mapStateToProps function in react-redux maps states in Redux to props of a React components, which is basically changing props of a React component when Redux state is changed by an Redux action.
* mapStateToProps pass state as a props to component using react-redux connect () function. Consider connect() function as wrapper component, which passes props to children.
* The new component will subscribe to Redux store updates, this means that any time the store is updated, mapStateToProps will be called.
*/
const mapStateToProps = (state) => {
   return { ...state };
};

/**
* navigate : Function to link to another screen in your app. The navigate action will update the current state with the result of a navigate action.
* action   : An object with a type property that describes something that should result in a change of state.
*/
const mapActionToProp = () => ({
   ...action,
   navigate,
   destroy,
   ...AtiNavigationAction.AtiHeaderNavigationAction,
});

export default connect(mapStateToProps, mapActionToProp())(TransactionScreen);
