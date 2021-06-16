import { Grid, GridList, GridListTile } from "@material-ui/core";
import React from "react";
import CardComponent from "../cards";

const CardListComponent = ({ data, section }) => {
  return (
    <Grid container>
      <GridList>
        {data.map((choice) => {
          return (
            <GridListTile key={`grid_list_tile_${choice.title}`}>
              <CardComponent section={section} data={choice} />
            </GridListTile>
          );
        })}
      </GridList>
    </Grid>
  );
};

export default CardListComponent;
