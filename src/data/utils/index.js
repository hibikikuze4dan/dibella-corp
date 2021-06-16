import CYOADATA from "../index";

export const sectionTitles = Object.values(CYOADATA).map(
  (section) => section.title
);

export const openSectionTitlesObject = sectionTitles.reduce(
  (acc, curr) => ({ ...acc, [curr]: false }),
  {}
);

export const ENHANCEMENT_TYPES = [
  "vagina",
  "mouth",
  "nipples",
  "anus",
  "urethra",
];

export const choiceExistsFunc = (choicesArray, choice) => {
  return !!choicesArray.find(({ title }) => title === choice.title);
};
