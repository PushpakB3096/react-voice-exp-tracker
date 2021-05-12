import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";

import Form from "./Form/Form";

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {/* header for main card goes here */}
      <CardHeader
        title="Voice Powered Expense Tracker"
        subheader="By Pushpak Bhattacharya"
      />
      <CardContent>
        {/* displays total balance here */}
        <Typography align="center" variant="h6">
          Total Balance: ₹20400
        </Typography>
        {/* displays info on how to use it for the user */}
        <Typography
          variant="subtitle2"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          Try saying: Add income for ₹100 in salary category for Friday...
        </Typography>
        <Divider />
        {/* input form goes here */}
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* TODO: List will be here */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
