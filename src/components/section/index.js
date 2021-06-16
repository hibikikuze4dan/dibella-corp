import { Button, Grid } from "@material-ui/core";
import { snakeCase } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isSectionOpenFuntion } from "../../redux/selectors";
import { toggleOpenSection } from "../../redux/slice";
import CardListComponent from "./card-list";
import OpeningComponent from "./opening";

const SectionComponent = ({ section }) => {
  const dispatch = useDispatch();
  const { title, description } = section;
  const isSectionOpen = useSelector(isSectionOpenFuntion)(title);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button onClick={() => dispatch(toggleOpenSection(title))}>
          {title}
        </Button>
      </Grid>
      {isSectionOpen && (
        <Grid item xs={12}>
          <OpeningComponent {...{ title, description }} />
          <CardListComponent
            section={snakeCase(title)}
            data={section?.choices ?? []}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default SectionComponent;
