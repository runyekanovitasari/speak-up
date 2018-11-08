import * as actionType from './account-action-type';
import navigate from '../../../common/navigation/action';

export const notifyDetailSuccess = item => ({
   type: actionType.ACCOUNT_SUCCESS,
   payload: {
       item,
   },
});

export const findDetail = (screenName, detail) => {
   return (dispatch) => {
       dispatch(notifyDetailSuccess(detail));
       dispatch(navigate(screenName));
   };
};

export const setListAccounts = (data) => {
   console.log("action",data)
   return (dispatch) => {
       dispatch({
           type: actionType.SET_LIST_ACCOUNTS,
           payload: data,
       });
   };
};

export const getListAccounts = (webConsole) => (dispatch) => {
   let tempArrayAccount = [];
   webConsole.nonfin('getListAccounts', {}, true).then(
       (response) => {
           const responseAccounts = response.body.GetListAccountResponse;
           if (responseAccounts.BankAccount) {
               if (!(responseAccounts.BankAccount instanceof Array)) {
                   tempArrayAccount.push(responseAccounts.BankAccount);
               } else {
                   tempArrayAccount = tempArrayAccount.concat(responseAccounts.BankAccount);
               }
           }

           if (responseAccounts.VirtualAccount) {
               if (!(responseAccounts.VirtualAccount instanceof Array)) {
                   tempArrayAccount.push(responseAccounts.VirtualAccount);
               } else {
                   tempArrayAccount = tempArrayAccount.concat(responseAccounts.VirtualAccount);
               }
           }
           dispatch(setListAccounts(tempArrayAccount))
       },
       (err) => {
           console.log('failed ', err);
       },
   );
};