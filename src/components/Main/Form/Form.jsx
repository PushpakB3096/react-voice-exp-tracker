import React, { useState, useContext } from "react";
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
import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./styles";

// state of initial form
const initialFormState = {
  type: "Income",
  category: "",
  amount: "",
  date: new Date(),
};
const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialFormState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  // function to create a new transaction and save it to the store
  const createTransaction = () => {
    // create a structured transaction
    const newTransaction = {
      ...formData,
      // convert amount from string to a number
      amount: Number(formData.amount),
    };

    console.log(newTransaction);
    // add the new transaction to the state
    addTransaction(newTransaction);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* this section will display the text as we speak */}
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
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
            <MenuItem value="salary">Salary</MenuItem>
            <MenuItem value="business">Business</MenuItem>
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
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
