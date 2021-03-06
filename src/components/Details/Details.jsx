import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
import useTransaction from "../../hooks/useTransaction";

const Details = ({ title }) => {
  const classes = useStyles();
  // custom hook that generates the total as well as the chart data based on our transactions
  const { total, chartData } = useTransaction(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant='h6'>₹{total}</Typography>
        <Doughnut className={classes.chart} data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
