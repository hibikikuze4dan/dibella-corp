import CYOADATA from "../index";

export const sectionTitles = Object.values(CYOADATA).map(
  (section) => section.title
);

export const openSectionTitlesObject = sectionTitles.reduce(
  (acc, curr) => ({ ...acc, [curr]: false }),
  {}
);
