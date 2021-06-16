import { createSelector } from "reselect";

export const getCyoaData = (state) => state?.cyoaData ?? {};

export const getOpenSections = (state) => state?.openSections ?? {};

export const getSectionTitles = createSelector(getCyoaData, (data) => {
  return Object.values(data).map((data) => data?.title ?? "");
});

export const isSectionOpenFuntion = createSelector(
  getOpenSections,
  (openSections) => {
    return (sectionTitle) => !!openSections[sectionTitle];
  }
);
