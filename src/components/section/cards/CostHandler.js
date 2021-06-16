import { Grid, Typography } from "@material-ui/core";
import React from "react";

const CostHandlerComponent = ({ cost, isDouble }) => {
  const copies = {
    single: cost < 0 ? "Gain: " : "Cost: ",
    double: "Next Purchase's Cost: ",
  };
  return (
    <Grid container justify="center">
      <Typography>
        {isDouble ? copies.double : copies.single}
        <span className="Pink-Purple">{Math.abs(cost)}</span>
      </Typography>
    </Grid>
  );
};

CostHandlerComponent.defaultProps = {
  cost: 0,
};

export default CostHandlerComponent;
