import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";

const Details = ({ title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.income}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">₹100</Typography>
        <Doughnut data="" />
      </CardContent>
    </Card>
  );
};

export default Details;
