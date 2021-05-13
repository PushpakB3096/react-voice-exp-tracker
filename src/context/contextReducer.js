import { DELETE_TRANSACTION, ADD_TRANSACTION } from "../constants/action";

const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case DELETE_TRANSACTION:
      // filters out the transaction that we want to delete from the state
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      return transactions;
    case ADD_TRANSACTION:
      // first add the new transaction so that it appears on the top of the list then add the remaining transactions
      transactions = [action.payload, ...state];
      return transactions;
    default:
      // in all other cases, return the list of transactions as is
      return state;
  }
};

export default contextReducer;
