import { Grid, Typography } from "@material-ui/core";
import Interweave from "interweave";
import React from "react";

const OpeningComponent = ({ title, description }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          <Interweave content={description.join("<br />")} />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OpeningComponent;
