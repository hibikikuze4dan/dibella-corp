import { Button, Grid } from "@material-ui/core";
import React from "react";

const OrficeButtonsComponent = () => {
  const buttonsArray = [
    { buttonLabel: "vagina", buttonAction: null },
    { buttonLabel: "mouth", buttonAction: null },
    { buttonLabel: "anus", buttonAction: null },
    { buttonLabel: "nipples", buttonAction: null },
    { buttonLabel: "urethra", buttonAction: null },
  ];
  return (
    <Grid container justify="space-around">
      {buttonsArray.map(({ buttonLabel }) => {
        return (
          <Grid key={`orfic_buttons_${buttonLabel}`} item xs={4}>
            <Button>{buttonLabel}</Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default OrficeButtonsComponent;
