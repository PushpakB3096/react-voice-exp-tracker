import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

const Details = () => {
  return (
    <Card>
      <CardHeader title="Income" />
      <CardContent>
        <Typography variant="h5">₹100</Typography>
        <Doughnut data="" />
      </CardContent>
    </Card>
  );
};

export default Details;
