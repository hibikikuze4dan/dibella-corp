import { createSlice } from "@reduxjs/toolkit";
import cyoaData from "../../data";
import { openSectionTitlesObject } from "../../data/utils";
import { toggleOpenSectionAction, updateEnhancementsAction } from "../actions";

const initialState = {
  saveTitle: "",
  cyoaData,
  mode: [],
  vaginaEnhancements: [],
  mouthEnhancements: [],
  anusEnhancements: [],
  nipplesEnhancements: [],
  urethraEnhancements: [],
  openSections: openSectionTitlesObject,
};

export const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    toggleOpenSection: toggleOpenSectionAction,
    updateEnhancements: updateEnhancementsAction,
  },
});

export const { toggleOpenSection, updateEnhancements } = saveSlice.actions;

export const selectCount = (state) => state.counter.value;

export default saveSlice.reducer;
