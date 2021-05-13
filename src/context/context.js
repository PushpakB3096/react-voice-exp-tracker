import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

// initially we will have no transactions
const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  // use of reducer for adding or deleting transactions
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // action creator to delete a transaction
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  // action creator to add a transaction
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
