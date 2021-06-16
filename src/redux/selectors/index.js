import { pickBy } from "lodash";
import { createSelector } from "reselect";
import { ENHANCEMENT_TYPES } from "../../data/utils";

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

export const getEnhancements = (state) => {
  return pickBy(state, (_val, key) => key.includes("Enhancements"));
};

export const isEnhancementPickedFunction = createSelector(
  getEnhancements,
  (enhancements) => {
    return (choice) => {
      return ENHANCEMENT_TYPES.reduce((acc, type) => {
        return {
          ...acc,
          [type]: !!enhancements[`${type}Enhancements`].find(
            ({ title }) => title === choice.title
          ),
        };
      }, {});
    };
  }
);

export const getSectionsWithDoubleChoices = (state) => {
  return pickBy(state, (_val, key) =>
    ["assassination_assortment", "customization"].includes(key)
  );
};

export const getTimesDoubleChoicePickedFunction = createSelector(
  getSectionsWithDoubleChoices,
  (doubleChoiceSections) => {
    return (choice) => {
      return Object.values(doubleChoiceSections)
        .reduce((acc, arr) => [...acc, ...arr], [])
        .filter(({ title }) => title === choice.title).length;
    };
  }
);
