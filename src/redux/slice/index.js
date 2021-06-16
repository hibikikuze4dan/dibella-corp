import { createSlice } from "@reduxjs/toolkit";
import cyoaData from "../../data";
import { openSectionTitlesObject } from "../../data/utils";
import {
  addChoiceToSectionAction,
  removeChoiceFromSectionAction,
  toggleOpenSectionAction,
  updateEnhancementsAction,
} from "../actions";

const initialState = {
  saveTitle: "",
  cyoaData,
  mode: [],
  assassination_assortment: [],
  customization: [],
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
    addChoiceToSection: addChoiceToSectionAction,
    removeChoiceFromSection: removeChoiceFromSectionAction,
  },
});

export const {
  toggleOpenSection,
  updateEnhancements,
  addChoiceToSection,
  removeChoiceFromSection,
} = saveSlice.actions;

export const selectCount = (state) => state.counter.value;

export default saveSlice.reducer;
