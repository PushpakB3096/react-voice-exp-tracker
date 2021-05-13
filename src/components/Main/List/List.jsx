import React from "react";
import {
  List as MUIList, // importing under a different name because our component is also named the same
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";

const List = () => {
  const classes = useStyles();

  // dummy transactions
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "Wed May 12",
    },
    {
      id: 1,
      type: "Expense",
      category: "Business",
      amount: 230,
      date: "Wed May 11",
    },
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 500,
      date: "Wed May 10",
    },
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 199,
      date: "Wed May 09",
    },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        // anything inside Slide component has an animation of sliding in/out
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                // adding classes based on transaction type
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`₹${transaction.amount} - ${transaction.date}`}
            />
            {/* delete transaction button */}
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
