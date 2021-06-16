import { Grid, Typography } from "@material-ui/core";
import React from "react";

const CostHandlerComponent = ({ cost }) => {
  return (
    <Grid container justify="center">
      <Typography>
        {cost < 0 ? "Gain: " : "Cost: "}
        <span className="Pink-Purple">{Math.abs(cost)}</span>
      </Typography>
    </Grid>
  );
};

CostHandlerComponent.defaultProps = {
  cost: 0,
};

export default CostHandlerComponent;
