import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import OrficeButtonsComponent from "./OrficeButtons";
import CostHandlerComponent from "../CostHandler";

const OrficeEnhancementCardComponent = ({ data }) => {
  const { title, description, cost } = data;
  return (
    <Card>
      <Grid container>
        <Grid item xs={12}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <CostHandlerComponent cost={cost} />
        </Grid>
        <Grid item xs={12}>
          <OrficeButtonsComponent />
        </Grid>
        <Grid item xs={12}>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OrficeEnhancementCardComponent;
