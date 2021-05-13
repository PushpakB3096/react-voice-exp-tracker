import React, { useState } from "react";
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

  console.log(formData);
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
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
