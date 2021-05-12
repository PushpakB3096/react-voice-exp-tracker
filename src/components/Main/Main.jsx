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
const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title="Voice Powered Expense Tracker"
        subheader="By Pushpak Bhattacharya"
      />
    </Card>
  );
};

export default Main;
