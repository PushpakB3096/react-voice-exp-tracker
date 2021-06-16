import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories
} from "../constants/category";

const useTransaction = title => {
  // reset all the category amount to zero
  resetCategories();

  // get all the transactions from the global store
  const { transactions } = useContext(ExpenseTrackerContext);

  /* 
  Filter all the transactions of the type received from the argument.
  transactionsOfType will hold transaction of either Income or Expense type 
  */
  const transactionsOfType = transactions.filter(t => t.type === title);

  // get the total amount of transactionsOfType
  const total = transactionsOfType.reduce((accumulator, currVal) => {
    accumulator += currVal.amount;
    return accumulator;
  }, 0);

  // get all possible categories of a type
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  // find category from the categories array and add the transaction's amount to the total amount of that category
  transactionsOfType.forEach(t => {
    // find the category
    const category = categories.find(c => c.type === t.category);

    // if category is found, add the amount
    if (category) {
      category.amount += t.amount;
    }
  });

  // get all the categories where the amount is not zero
  const filterdCategories = categories.filter(c => c.amount !== 0);

  // construct the chart data in a specific format as given by chart-js2
  const chartData = {
    datasets: [
      {
        data: filterdCategories.map(c => c.amount),
        backgroundColor: filterdCategories.map(c => c.color)
      }
    ],
    labels: filterdCategories.map(c => c.type)
  };

  return {
    total,
    chartData
  };
};

export default useTransaction;
