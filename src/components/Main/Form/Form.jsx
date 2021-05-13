import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useSpeechContext } from "@speechly/react-client";

import { ExpenseTrackerContext } from "../../../context/context";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/category";
import formatDate from "../../../utils/formatDate";
import useStyles from "./styles";

// state of initial form
const initialFormState = {
  type: "Income",
  category: "",
  amount: "",
  date: formatDate(new Date()),
};
const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialFormState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const { segment } = useSpeechContext();

  // function to create a new transaction and save it to the store
  const createTransaction = () => {
    // create a structured transaction
    const newTransaction = {
      ...formData,
      // convert amount from string to a number
      amount: Number(formData.amount),
      // generates a random ID using UUID and sets it
      id: uuidv4(),
    };

    // add the new transaction to the state
    addTransaction(newTransaction);
    // clear the form after adding the new transaction
    setFormData(initialFormState);
  };

  useEffect(() => {
    if (segment) {
      // the below 2 if blocks will check and set the type of transaction
      if (segment.intent.intent === "add_expense") {
        setFormData({
          ...formData,
          type: "Expenses",
        });
      } else if (segment.intent.intent === "add_income") {
        setFormData({
          ...formData,
          type: "Income",
        });
      }
      // isFinal will be true when the user has released the mic button and finished talking
      else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        // saves the transaction only when user says so
        return createTransaction();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        // clearing the transaction means setting the form to intial state
        setFormData(initialFormState);
      }

      segment.entities.forEach((e) => {
        switch (e.type) {
          case "amount":
            setFormData({
              ...formData,
              amount: e.value,
            });
            break;
          case "category":
            // changing all upercase category names received from speechly to title case
            const category = `${e.value.charAt(0)}${e.value
              .slice(1)
              .toLowerCase()}`;

            /* 
                Since expense and income categories are different, the combination must be enforced. 
                User can try and enter type as income along with a category for expense. We need to
                prevent this behaviour. If the category belongs to a certain type, we are explicitly
                changing the type as well along with the category. The below 2 if blocks takes care
                of that.
              */
            if (incomeCategories.map((ic) => ic.type).includes(category)) {
              setFormData({
                ...formData,
                type: "Income",
                category,
              });
            } else if (
              expenseCategories.map((ec) => ec.type).includes(category)
            ) {
              setFormData({
                ...formData,
                type: "Expenses",
                category,
              });
            }
            break;
          case "date":
            setFormData({
              ...formData,
              date: e.value,
            });
            break;
          default:
            break;
        }
      });
    }

    // checking to see if all fields are filled or not
    const areAllFilled =
      formData.amount && formData.category && formData.date && formData.type;

    // if all fields are filled and the user has finished talking, then save the transaction
    if (segment.isFinal && areAllFilled) {
      createTransaction();
    }
  }, [segment]);

  // prefill the categories to be shown based on the type of transaction selected
  const selectedCategoryType =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* this section will display the text as we speak */}
        <Typography align="center" variant="subtitle2" gutterBottom>
          {/* segment holds all the words that speechly detects */}
          {segment && segment.words.map((w) => w.value).join(" ")}
        </Typography>
      </Grid>
      {/* grid for type of entry */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expenses">Expenses</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* grid for category */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {/* loop over the categories array and populate the menu */}
            {selectedCategoryType.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {/* grid for amount field */}
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          fullWidth
        />
      </Grid>
      {/* grid for date field */}
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
          fullWidth
        />
      </Grid>
      {/* create button */}
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
