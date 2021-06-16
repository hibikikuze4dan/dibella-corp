import { Grid, Card, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getTimesDoubleChoicePickedFunction } from "../../../../redux/selectors";
import CostHandlerComponent from "../CostHandler";
import DoublePurchaseComponent from "./DoublePurchase";

const DoublePurchaseCardComponent = ({ data, section }) => {
  const { title, description, costPerPurchase } = data;
  const timesPicked = useSelector(getTimesDoubleChoicePickedFunction)(data);
  const cost = costPerPurchase[timesPicked] ?? 0;
  return (
    <Card>
      <Grid container>
        <Grid item xs={12}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <CostHandlerComponent isDouble cost={cost} />
        </Grid>
        <Grid item xs={12}>
          <DoublePurchaseComponent
            picked={timesPicked}
            data={data}
            section={section}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DoublePurchaseCardComponent;
