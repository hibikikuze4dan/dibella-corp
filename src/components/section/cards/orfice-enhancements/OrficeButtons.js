import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEnhancementPickedFunction } from "../../../../redux/selectors";
import { updateEnhancements } from "../../../../redux/slice";

const OrficeButtonsComponent = ({ data }) => {
  const dispatch = useDispatch();
  const buttonsArray = [
    { buttonLabel: "vagina", buttonAction: null },
    { buttonLabel: "mouth", buttonAction: null },
    { buttonLabel: "anus", buttonAction: null },
    { buttonLabel: "nipples", buttonAction: null },
    { buttonLabel: "urethra", buttonAction: null },
  ];
  const picked = useSelector(isEnhancementPickedFunction)(data);

  return (
    <Grid container justify="space-around">
      {buttonsArray.map(({ buttonLabel }) => {
        const orficePicked = picked[buttonLabel];
        return (
          <Grid key={`orfic_buttons_${buttonLabel}`} item xs={4}>
            <Button
              style={{ backgroundColor: orficePicked ? "green" : "inherit" }}
              onClick={() =>
                dispatch(updateEnhancements({ orficeType: buttonLabel, data }))
              }
            >
              {buttonLabel}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default OrficeButtonsComponent;
