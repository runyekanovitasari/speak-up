import * as actionType from './account-action-type';

const initialState = {
   isDetails: false,
   item: [],
   hasError: false,
   errorMessage: null,
   query: '',
   accountList: [
       {
           accountNumber: '0299200121773003', amount: '791800', productName: 'Pocket Saving', accountStatus: 'Active',
       },
       {
           accountNumber: '0299200221773003', amount: '792800', productName: 'Pocket Saving', accountStatus: 'Active',
       },
       {
           accountNumber: '0299200321773003', amount: '793800', productName: 'Pocket Saving', accountStatus: 'Active',
       },
       {
           accountNumber: '0299200421773003', amount: '794800', productName: 'Pocket Saving', accountStatus: 'Active',
       },
       {
           accountNumber: '0299200521773003', amount: '795800', productName: 'Pocket Saving', accountStatus: 'Active',
       },
   ],
   accountHistoryList: [
       { transaction: 'Payment Go-Pay Customer Top Up 09-05-2018', amount: '125000' },
       { transaction: 'Internal Transfer TRF01/21923AK/Mobile Banking 10-05-2018', amount: '520000' },
       { transaction: 'Top Up e-money/cb. Graha Anabatic 11-05-2018', amount: '57000' },
   ],
};

const AccountReducer = (state = initialState, action) => {
   const { type, payload } = action;
   switch (type) {
       case actionType.ACCOUNT_SUCCESS:
           return { ...state, isDetails: false, item: payload.item };
       case actionType.SET_LIST_ACCOUNTS:
           return { ...state, accountList: payload };
       default:
           return state;
   }
};

export default AccountReducer;