/**
 * This component will display list of accounts. Each account can be clicked and redirect to detail account screen (depend with the account).
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../modules/account/store/account-action';
import navigate from '../../common/navigation/action';
import ListComponent from '../../modules/account/components/list-component';

/* property that used for component ListScreen. such as :
 * dataArray : source data of accounts list that will be loaded and displayed
 * events : callback event that filled with function onPress. Then the function will automatically dispatch to the detail screen of account
 */

class ListScreen extends Component {
    render() {
        return (
            <ListComponent
                dataArray={this.props.accountList}
                events={{
                    onPress: (details) => {
                        this.props.findDetail('DetailScreen', details);
                    },
                }}
            />
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
        ...account,
    };
};

/**
 * action   : An object with a type property that describes something that should result in a change of state.
 * navigate : Function to link to another screen in your app. The navigate action will update the current state with the result of a navigate action.
 * connect  : A higher-order function from react-redux that can wrap one of our components. connect takes up to two arguments, usually named mapStateToProps and mapActionToProp. We use these functions to tell Redux which pieces of state to pass to our component as props, and also to give us a convenient reference to the store’s dispatch method.
 */

const actionToProps = () => ({
    ...action,
    navigate,
});

export default connect(mapStateToProps, actionToProps())(ListScreen);