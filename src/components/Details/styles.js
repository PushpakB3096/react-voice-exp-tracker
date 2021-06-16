import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  income: {
    borderBottom: "7px solid rgba(0, 255, 0, 0.5)"
  },
  expense: {
    borderBottom: "7px solid rgba(255, 0, 0, 0.5)"
  },
  chart: {
    maxHeight: "450px"
  }
}));
