import { choiceExistsFunc, findLastChoiceIndex } from "../../data/utils";

export const toggleOpenSectionAction = (state, action) => {
  state.openSections = {
    ...state.openSections,
    [action.payload]: !state.openSections[action.payload],
  };
};

export const updateEnhancementsAction = (state, action) => {
  const { orficeType, data } = action.payload;
  const stateKey = `${orficeType}Enhancements`;

  const exists = choiceExistsFunc(state[stateKey], data);
  state[stateKey] = exists
    ? [...state[stateKey].filter(({ title }) => title !== data.title)]
    : [...state[stateKey], data];
};

export const addChoiceToSectionAction = (state, action) => {
  const { section, data } = action.payload;
  state[section] = [...state[section], data];
};

export const removeChoiceFromSectionAction = (state, action) => {
  const { section, data } = action.payload;
  const exists = findLastChoiceIndex(state[section], data);
  state[section] = [...state[section].filter((_c, index) => index !== exists)];
};
