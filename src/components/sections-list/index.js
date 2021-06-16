import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getCyoaData } from "../../redux/selectors";
import SectionComponent from "../section";

const SectionListComponent = () => {
  const data = useSelector(getCyoaData);
  return (
    <Grid container>
      {Object.values(data).map((section) => {
        return (
          <Grid key={`section_list_item_${section.title}`} item xs={12}>
            <SectionComponent section={section} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SectionListComponent;
