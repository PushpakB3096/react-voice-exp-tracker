import React from "react";
import { Grid } from "@material-ui/core";

// custom components
import Details from "./components/Details/Details";

const App = () => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          Main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expenses" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
