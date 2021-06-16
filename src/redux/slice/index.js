import { createSlice } from "@reduxjs/toolkit";
import cyoaData from "../../data";
import { openSectionTitlesObject } from "../../data/utils";
import { toggleOpenSectionAction } from "../actions";

const initialState = {
  saveTitle: "",
  cyoaData,
  mode: [],
  openSections: openSectionTitlesObject,
};

export const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    toggleOpenSection: toggleOpenSectionAction,
  },
});

export const { toggleOpenSection } = saveSlice.actions;

export const selectCount = (state) => state.counter.value;

export default saveSlice.reducer;
