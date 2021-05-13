import React from "react";

// randomly generates a number between 0 or 1
const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "income " : "expense "} for {isIncome ? "₹100 " : "₹50 "}
      in
      {isIncome ? " salary " : " bills "} category for next friday...
    </div>
  );
};

export default InfoCard;
