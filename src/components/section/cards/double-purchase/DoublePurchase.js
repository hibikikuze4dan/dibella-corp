import { Button } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import {
  AddRounded,
  ArrowBack,
  ArrowForward,
  Remove,
} from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addChoiceToSection,
  removeChoiceFromSection,
} from "../../../../redux/slice";

const DoublePurchaseComponent = ({ section, data, picked }) => {
  const dispatch = useDispatch();
  const isRemoveDisabled = picked < 1;
  const isAddDisabled = picked > 1;
  return (
    <Grid container>
      <Grid item xs={4}>
        <Button
          disabled={isRemoveDisabled}
          onClick={() => dispatch(removeChoiceFromSection({ section, data }))}
          startIcon={<Remove />}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography>{picked}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button
          disabled={isAddDisabled}
          onClick={() => dispatch(addChoiceToSection({ section, data }))}
          endIcon={<AddRounded />}
        />
      </Grid>
    </Grid>
  );
};

export default DoublePurchaseComponent;
