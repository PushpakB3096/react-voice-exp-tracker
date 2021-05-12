import React from "react";
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

const Form = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* this section will display the text as we speak */}
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Form;
