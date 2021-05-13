import React, { useReducer, createContext } from "react";

// initially we will have no transactions
const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  return (
    <ExpenseTrackerContext.Provider value={{ appName: "Expense Tracker" }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
