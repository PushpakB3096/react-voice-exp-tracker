import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import { DELETE_TRANSACTION, ADD_TRANSACTION } from "../constants/action";

// on page load, we will fetch transactions from localStorage, if present. Otherwise, show some default ones
const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    type: "Expenses",
    category: "Entertainment",
    amount: 650,
    date: "2021-05-13",
    id: "f819db8e-059d-4f4d-beec-4515a5df33a9"
  },
  {
    type: "Expenses",
    category: "Pets",
    amount: 120,
    date: "2021-05-13",
    id: "f4584911-7f79-4b34-b045-5e01dbe225c4"
  },
  {
    type: "Income",
    category: "Deposits",
    amount: 500,
    date: "2021-05-13",
    id: "9b25dc40-4d7c-4e1c-a6b8-6d6f3c9109bd"
  },
  {
    type: "Expenses",
    category: "Bills",
    amount: 100,
    date: "2021-05-10",
    id: "24bf82fc-1061-4693-8cef-776f75e57d7d"
  },
  {
    type: "Income",
    category: "Investments",
    amount: 50,
    date: "2021-05-13",
    id: "a765c19e-b4df-44e2-8aa0-830c5fa4b32c"
  }
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  // use of reducer for adding or deleting transactions
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const balance = transactions.reduce((accumulator, currVal) => {
    return currVal.type === "Income"
      ? accumulator + currVal.amount
      : accumulator - currVal.amount;
  }, 0);

  // action creator to delete a transaction
  const deleteTransaction = id => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    });
  };

  // action creator to add a transaction
  const addTransaction = transaction => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
